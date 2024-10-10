import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function VoiceRecognition({ onTranscript }) {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Checks if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onTranscript(transcript);
      };

      setRecognition(recognition);
    }
  }, [onTranscript]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  return (
    <button
      onClick={startListening}
      className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
      disabled={isListening}
    >
      {isListening ? 'Listening...' : 'Speak 🎤'}
    </button>
  );
}

// Add prop validation
VoiceRecognition.propTypes = {
  onTranscript: PropTypes.func.isRequired,
};