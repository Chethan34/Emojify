import { useState } from 'react'

export default function EmojiTranslator() {
  const [inputText, setInputText] = useState('');
  const [emojifiedText, setEmojifiedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEmojify = () => {
    setEmojifiedText(inputText);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Emojify Your Text! </h2>
                <div className="mb-4">
                  <textarea
                    className="w-full p-2 border rounded-lg"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Type your text here..."
                    rows={4}
                  />
                </div>
                <button
                  onClick={handleEmojify}
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Emojify! 
                </button>
                {emojifiedText && (
                  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Emojified Result:</h3>
                    <p className="text-2xl">{emojifiedText}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

