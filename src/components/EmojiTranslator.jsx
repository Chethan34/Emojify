import { useState, useRef } from 'react';
import Sentiment from 'sentiment';
import { emojifyText, getAlternativeEmojis } from "../utils/emojiUtils";
import VoiceRecognition from './VoiceRecognition';

const sentiment = new Sentiment();

export default function EmojiTranslator() {
  const [inputText, setInputText] = useState('');
  const [emojifiedText, setEmojifiedText] = useState([]);
  const [hoveredEmojiIndex, setHoveredEmojiIndex] = useState(null);
  const hideTimeout = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEmojify = () => {
    const sentimentScore = sentiment.analyze(inputText).score;
    const newEmojifiedText = emojifyText(inputText, sentimentScore);
    setEmojifiedText(newEmojifiedText);
  };

  const handleHover = (index) => {
    clearTimeout(hideTimeout.current);
    setHoveredEmojiIndex(index);
  };

  const handleLeaveHover = () => {
    hideTimeout.current = setTimeout(() => {
      setHoveredEmojiIndex(null);
    }, 300);
  };

  const handleEmojiSelect = (emoji, index) => {
    setEmojifiedText((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, emoji } : item
      )
    );
  };

  const handleTranscript = (transcript) => {
    setInputText(transcript);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6 p-10 border border-blue-500">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Emojify Your Text! 🎉</h1>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            className="flex-grow p-4 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg resize-none h-48"
            placeholder="Enter your text here... 📝"
          />
          <VoiceRecognition onTranscript={handleTranscript} />
        </div>
        <button
          onClick={handleEmojify}
          className="w-full py-4 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-lg font-semibold"
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

                  {hoveredEmojiIndex === index && (
                    <div className="absolute z-10 mt-1 p-2 bg-white rounded-lg shadow-lg border border-gray-300 flex space-x-2">
                      {getAlternativeEmojis(item.word || '').map((emoji, altIndex) => (
                        <span
                          key={altIndex}
                          className="cursor-pointer text-2xl hover:bg-blue-200 rounded transition-all transform hover:scale-110"
                          onClick={() => handleEmojiSelect(emoji, index)}
                          onMouseEnter={() => clearTimeout(hideTimeout.current)}
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