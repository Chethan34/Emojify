const emojiMap = {
  // Emotions
  'love': ['❤️', '😍', '🥰', '💖', '💘'],
  'happy': ['😊', '😄', '😁', '😎', '😃'],
  'sad': ['😢', '😭', '😞', '😔', '🙁'],
  'angry': ['😠', '😡', '🤬', '👿', '😤'],
  'surprised': ['😲', '😮', '😯', '🤯', '😳'],
  'fear': ['😱', '😨', '😰', '😖', '😬'],
  
  // Animals
  'dog': ['🐶', '🐕', '🦮', '🐕‍🦺', '🐩'],
  'cat': ['🐱', '🐈', '😺', '🐈‍⬛', '😸'],
  'bird': ['🐦', '🦜', '🦢', '🐧', '🦉'],
  'fish': ['🐟', '🐠', '🐡', '🐬', '🐳'],
  
  // Food and Drinks
  'food': ['🍔', '🍕', '🍣', '🍟', '🥗', '🌮'],
  'drink': ['🍺', '🍷', '🥤', '☕', '🍵', '🍹'],
  'fruit': ['🍎', '🍇', '🍌', '🍉', '🍍'],
  'dessert': ['🍰', '🍩', '🍫', '🍪', '🍨'],
  
  // Activities and Fun
  'fun': ['🎉', '🎊', '🥳', '🎈', '🤹'],
  'music': ['🎵', '🎶', '🎸', '🎤', '🎧'],
  'sport': ['⚽', '🏀', '🎾', '🏈', '🏓'],
  'dance': ['💃', '🕺', '👯', '🎽', '🩰'],

  // Travel and Places
  'travel': ['✈️', '🚗', '🚢', '🚂', '🚲'],
  'nature': ['🌳', '🌺', '🌊', '⛰️', '🌵'],
  'weather': ['☀️', '🌧️', '❄️', '🌈', '🌪️'],
  'city': ['🏙️', '🌆', '🏛️', '🏨', '🏗️'],

  // Technology and Objects
  'tech': ['💻', '📱', '🤖', '🖥️', '⌨️'],
  'office': ['📋', '📊', '📈', '🗂️', '📎'],
  'money': ['💵', '💰', '💳', '🪙', '🏦'],
  'games': ['🎮', '🕹️', '♟️', '🎲', '🃏'],

  // People and Gestures
  'greeting': ['👋', '🙌', '🙏', '🤝', '🤗'],
  'thumbs': ['👍', '👎', '👏', '🤲', '✌️'],
  'family': ['👨‍👩‍👧', '👩‍👦', '👪', '🧑‍🤝‍🧑', '👩‍❤️‍👨'],
  
  // Symbols
  'symbols': ['⚠️', '❌', '✅', '🔔', '❓'],
  'hearts': ['💓', '💗', '💙', '💚', '💛']
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