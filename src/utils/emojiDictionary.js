const primaryEmojis = {
  'love': '❤️',
  'happy': '😊',
  'sad': '😢',
  'dog': '🐶',
  'cat': '🐱',
  'pizza': '🍕',
  'good': '👍',
  'bad': '👎',
  'yes': '✅',
  'no': '❌',
  'hello': '👋',
  'bye': '👋',
  'laugh': '😂',
  'cool': '😎',
  'wow': '😮',
  'angry': '😠',
  'heart': '❤️',
  'sleep': '😴',
  'cry': '😢',
  'think': '🤔'
};

const alternativeEmojis = {
  'love': ['❤️', '💕', '💗', '💓', '💖'],
  'happy': ['😊', '😃', '😄', '🙂', '😁'],
  'sad': ['😢', '😥', '😓', '😔', '😞'],
  'dog': ['🐶', '🐕', '🐩', '🦮', '🐕‍🦺'],
  'cat': ['🐱', '🐈', '😺', '😸', '😻'],
  'pizza': ['🍕', '🧀', '🍅', '🥖', '🥨'],
  'good': ['👍', '👌', '🆗', '💯', '✔️'],
  'bad': ['👎', '❌', '⛔', '🚫', '🙅‍♂️'],
  'hello': ['👋', '🤚', '🖐️', '✋', '👐'],
  'bye': ['👋', '✌️', '🤚', '🖐️', '👊'],
  'laugh': ['😂', '🤣', '😅', '😆', '😹'],
  'cool': ['😎', '🤩', '🤙', '👑', '💯'],
  'angry': ['😠', '😡', '🤬', '💢', '👿']
};

export function getAlternativeEmojis(word) {
  return alternativeEmojis[word] || [];
}

export default function emojiDictionary() {
  return primaryEmojis;
}