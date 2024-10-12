const emojiMap = {
  'love': ['❤️', '😍', '🥰'],
  'happy': ['😊', '😄', '😁'],
  'sad': ['😢', '😭', '😞'],
  'angry': ['😠', '😡', '🤬'],
  'dog': ['🐶', '🐕', '🦮'],
  'cat': ['🐱', '🐈', '😺'],
  'food': ['🍔', '🍕', '🍣'],
  'drink': ['🍺', '🍷', '🥤'],
  'fun': ['🎉', '🎊', '🥳'],
  'music': ['🎵', '🎶', '🎸'],
  'sport': ['⚽', '🏀', '🎾'],
  'weather': ['☀️', '🌧️', '❄️'],
  'travel': ['✈️', '🚗', '🚢'],
  'nature': ['🌳', '🌺', '🌊'],
  'tech': ['💻', '📱', '🤖']
};

function getEmojiForSentiment(word, sentimentScore) {
  const emojis = emojiMap[word.toLowerCase()] || [];
  if (emojis.length === 0) return '';  // Return empty if no emoji found

  // Select emoji based on sentiment score
  if (sentimentScore > 2) return emojis[0]; // Positive sentiment
  if (sentimentScore < -2) return emojis[emojis.length - 1]; // Negative sentiment
  return emojis[Math.floor(emojis.length / 2)]; // Neutral sentiment
}

export function emojifyText(text, sentimentScore) {
  const words = text.split(/\s+/);  // Split text into individual words
  return words.map(word => {
    const emoji = getEmojiForSentiment(word, sentimentScore);
    return { word, emoji: emoji || word }; // Return an object with the word and emoji
  });
}

export function getAlternativeEmojis(word) {
  return emojiMap[word.toLowerCase()] || [];
}
