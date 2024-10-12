import { useState, useRef } from 'react';
import Sentiment from 'sentiment';
import { emojifyText, getAlternativeEmojis } from "../utils/emojiUtils";

const sentiment = new Sentiment();

export default function EmojiTranslator() {
  const [inputText, setInputText] = useState('');
  const [emojifiedText, setEmojifiedText] = useState([]);
  const [hoveredEmojiIndex, setHoveredEmojiIndex] = useState(null); // Track hovered emoji index
  const hideTimeout = useRef(null); // Ref to store timeout for delayed hide

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEmojify = () => {
    const sentimentScore = sentiment.analyze(inputText).score;
    const newEmojifiedText = emojifyText(inputText, sentimentScore);
    setEmojifiedText(newEmojifiedText);
  };

  const handleHover = (index) => {
    // Clear any pending hide timeouts to prevent premature hiding
    clearTimeout(hideTimeout.current);
    setHoveredEmojiIndex(index); // Set the hovered emoji index
  };

  const handleLeaveHover = () => {
    // Add a small delay before hiding the emoji options
    hideTimeout.current = setTimeout(() => {
      setHoveredEmojiIndex(null); // Reset hover state
    }, 300); // Adjust the delay as needed (300ms here)
  };

  const handleEmojiSelect = (emoji, index) => {
    // Replace the emoji with the selected one
    setEmojifiedText((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, emoji } : item
      )
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Emojify Your Text! 🎉</h1>

      <div className="space-y-6">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          className="w-full p-3 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
          rows={4}
          placeholder="Enter your text here... 📝"
        />
        <button
          onClick={handleEmojify}
          className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-lg font-semibold"
        >
          Emojify! ✨
        </button>

        {emojifiedText.length > 0 && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold mb-3 text-blue-700">Emojified Result:</h3>
            <div className="text-xl leading-relaxed">
              {emojifiedText.map((item, index) => (
                <span 
                  key={index} 
                  className="relative inline-block mr-2 mb-2 cursor-pointer"
                  onMouseEnter={() => handleHover(index)} 
                  onMouseLeave={handleLeaveHover}
                >
                  <span className="transition-transform transform">{item.emoji}</span>

                  {/* Alternative emojis shown on hover with delayed hiding */}
                  {hoveredEmojiIndex === index && (
                    <div className="absolute z-10 mt-1 p-2 bg-white rounded-lg shadow-lg border border-gray-300 flex space-x-2">
                      {getAlternativeEmojis(item.word || '').map((emoji, altIndex) => (
                        <span
                          key={altIndex}
                          className="cursor-pointer text-2xl hover:bg-blue-200 rounded transition-all transform hover:scale-110"
                          onClick={() => handleEmojiSelect(emoji, index)} // Replace emoji on click
                          onMouseEnter={() => clearTimeout(hideTimeout.current)} // Prevent hiding when hovering over options
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
