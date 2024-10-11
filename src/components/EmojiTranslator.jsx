import { useState } from 'react';
import emojiDictionary, { getAlternativeEmojis } from '../utils/emojiDictionary';
import VoiceRecognition from './VoiceRecognition';
import { analyzeSentiment } from '../utils/sentimentAnalysis';

export default function EmojiTranslator() {
  const [inputText, setInputText] = useState('');
  const [emojifiedText, setEmojifiedText] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleVoiceTranscript = (transcript) => {
    setInputText(transcript);
    handleEmojify(transcript); // Automatically emojify the voice input
  };

  // Handle converting text to emojis based on sentiment
  const handleEmojify = () => {
    const dictionary = emojiDictionary();
    const sentiment = analyzeSentiment(inputText); // Get sentiment analysis result
    const words = inputText.split(' ');

    // words to objects (original words, emojis, and alternatives)
    const emojified = words.map((word) => {
      const emoji = dictionary[word.toLowerCase()] || word;
      const alternatives = dictionary[word.toLowerCase()]
        ? getAlternativeEmojis(word.toLowerCase())
        : null;

      // Adjust emoji suggestion based on sentiment
      if (sentiment > 0 && alternatives) {
        return {
          original: word,
          current: alternatives[0] || emoji, // Positive sentiment emoji
          alternatives: alternatives,
        };
      } else if (sentiment < 0 && alternatives) {
        return {
          original: word,
          current: alternatives[alternatives.length - 1] || emoji, // Negative sentiment emoji
          alternatives: alternatives,
        };
      }
      return { original: word, current: emoji, alternatives };
    });

    setEmojifiedText(emojified);
  };

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
          <div className="flex gap-2">
            <textarea
              value={inputText}
              onChange={handleInputChange}
              className="flex-1 p-2 border rounded-lg"
              rows={4}
              placeholder="Enter your text here..."
            />
            <div className="flex flex-col justify-start">
              <VoiceRecognition onTranscript={handleVoiceTranscript} />
            </div>
          </div>
          <button
            onClick={handleEmojify}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Emojify!
          </button>

          {emojifiedText.length > 0 && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Emojified Result:</h3>
              <div className="flex flex-wrap gap-2">
                {emojifiedText.map((item, index) => (
                  <div key={index} className="relative inline-block">
                    {item.alternatives ? (
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
