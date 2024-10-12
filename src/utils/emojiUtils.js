import emojiData from '../data/all-emoji.json';

// Create a mapping of keywords to emojis from the JSON dataset
const emojiMap = {};

// Iterate through the emoji categories in the JSON
for (const category in emojiData) {
  emojiData[category].forEach(entry => {
    const { emoji, keywords } = entry; // Only destructure the necessary variables

    // Map keywords to the respective emoji
    keywords.forEach(keyword => {
      const lowerKeyword = keyword.toLowerCase();
      if (!emojiMap[lowerKeyword]) {
        emojiMap[lowerKeyword] = [];
      }
      emojiMap[lowerKeyword].push(emoji);
    });
  });
}

export function getEmojisForKeyword(keyword) {
  return emojiMap[keyword.toLowerCase()] || []; // Return emojis for the keyword
}

export function getEmojiForSentiment(word, sentimentScore) {
  const emojis = getEmojisForKeyword(word);
  if (emojis.length === 0) return '';  // Return empty if no emoji found

  // Logic for selecting emoji based on sentiment score
  if (sentimentScore > 2) return emojis[0]; // Positive sentiment
  if (sentimentScore < -2) return emojis[emojis.length - 1]; // Negative sentiment
  return emojis[Math.floor(emojis.length / 2)]; // Neutral sentiment
}

export function emojifyText(text, sentimentScore) {
  const words = text.split(/\s+/);
  return words.map(word => {
    const emoji = getEmojiForSentiment(word, sentimentScore);
    return { word, emoji: emoji || word };
  });
}

export function getAlternativeEmojis(word) {
  return getEmojisForKeyword(word);
}