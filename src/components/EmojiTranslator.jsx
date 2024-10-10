import { useState } from 'react';
import emojiDictionary, { getAlternativeEmojis } from '../utils/emojiDictionary';

export default function EmojiTranslator() {
  const [inputText, setInputText] = useState('');
  const [emojifiedText, setEmojifiedText] = useState([]);
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // converting text to emojis
  const handleEmojify = () => {
    const dictionary = emojiDictionary();
    const words = inputText.split(' '); // Splitting individual words from given input
    
    // words to objects(original words, emojis and alternatives)
    const emojified = words.map(word => ({
      original: word,
      current: dictionary[word.toLowerCase()] || word, // Use emoji if available, otherwise keep original word
      alternatives: dictionary[word.toLowerCase()] 
        ? getAlternativeEmojis(word.toLowerCase()) 
        : null // Get alternative emojis if available
    }));
    
    setEmojifiedText(emojified);
  };

  // Handler for changing individual emojis
  const handleEmojiChange = (index, newEmoji) => {
    const updatedText = [...emojifiedText];
    updatedText[index].current = newEmoji;
    setEmojifiedText(updatedText);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Emojify Your Text!</h1>
        <div className="space-y-4">
          {/* Text input area */}
          <textarea
            value={inputText}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            rows={4}
            placeholder="Enter your text here..."
          />
          {/* Emojify button */}
          <button
            onClick={handleEmojify}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Emojify!
          </button>
          {/* Results section */}
          {emojifiedText.length > 0 && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Emojified Result:</h3>
              <div className="flex flex-wrap gap-2">
                {/* Map through emojified words and render either dropdown or plain text */}
                {emojifiedText.map((item, index) => (
                  <div key={index} className="relative inline-block">
                    {item.alternatives ? (
                      // Dropdown for words with emoji alternatives
                      <select
                        value={item.current}
                        onChange={(e) => handleEmojiChange(index, e.target.value)}
                        className="text-2xl bg-white border rounded p-1"
                      >
                        <option value={item.current}>{item.current}</option>
                        {item.alternatives.map((emoji, i) => (
                          <option key={i} value={emoji}>
                            {emoji}
                          </option>
                        ))}
                      </select>
                    ) : (
                      // Plain text for words without emoji alternatives
                      <span className="text-2xl">{item.current}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}