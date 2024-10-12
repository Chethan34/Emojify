import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function VoiceRecognition({ onTranscript }) {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;

      recognitionInstance.onstart = () => setIsListening(true);
      recognitionInstance.onend = () => setIsListening(false);
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onTranscript(transcript);
      };

      setRecognition(recognitionInstance);
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  }, [onTranscript]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  return (
    <button
      onClick={startListening}
      className={`py-2 px-4 ${
        isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
      } text-white rounded-lg transition-colors flex items-center justify-center transform hover:scale-105`}
      disabled={isListening}
    >
      {isListening ? 'Listening... 🎤' : 'Speak 🎤'}
    </button>
  );
}

VoiceRecognition.propTypes = {
  onTranscript: PropTypes.func.isRequired,
};