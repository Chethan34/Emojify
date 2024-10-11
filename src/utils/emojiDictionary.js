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
  'think': '🤔',
  'confused': '😕',
  'surprised': '😲',
  'bored': '😐',
  'celebrate': '🎉',
  'party': '🥳',
  'thumbs_up': '👍',
  'thumbs_down': '👎',
  'clap': '👏',
  'star': '⭐',
  'fire': '🔥',
  'music': '🎶',
  'check': '✔️',
  'cross': '❌',
  'gift': '🎁',
  'sun': '☀️',
  'moon': '🌙',
  'rain': '🌧️',
  'snow': '❄️',
  'coffee': '☕',
  'tea': '🍵',
  'cake': '🍰',
  'ice_cream': '🍦',
  'flower': '🌸',
  'tree': '🌳',
  'earth': '🌍',
  'rocket': '🚀',
  'car': '🚗',
  'bike': '🚴‍♂️',
  'computer': '💻',
  'phone': '📱',
  'book': '📚',
  'pen': '✏️',
  'lightbulb': '💡',
  'sparkles': '✨',
  'trophy': '🏆',
  'medal': '🥇',
  'soccer': '⚽',
  'basketball': '🏀',
  'football': 'American Football: 🏈',
  'swimming': '🏊‍♂️',
  'runner': '🏃‍♂️',
  'dancer': '💃',
  'yoga': '🧘‍♀️',
  'pizza_slice': '🍕',
  'hamburger': '🍔',
  'fries': '🍟',
  'sushi': '🍣',
  'taco': '🌮',
  'hot_dog': '🌭',
  'popcorn': '🍿',
  'chocolate': '🍫',
  'candy': '🍬',
  'donut': '🍩',
  'beach': '🏖️',
  'mountain': '⛰️',
  'city': '🏙️',
  'house': '🏡',
  'castle': '🏰',
  'shopping': '🛍️',
  'money': '💰',
  'bank': '🏦',
  'hospital': '🏥',
  'school': '🏫',
  'art': '🎨',
  'theater': '🎭',
  'movie': '🎬',
  'camera': '📷',
  'globe': '🌐',
  'mail': '✉️',
};

const alternativeEmojis = {
  'love': ['❤️', '💕', '💗', '💓', '💖', '💞'],
  'happy': ['😊', '😃', '😄', '🙂', '😁', '😆'],
  'sad': ['😢', '😥', '😓', '😔', '😞', '😩'],
  'dog': ['🐶', '🐕', '🐩', '🦮', '🐕‍🦺', '🐾'],
  'cat': ['🐱', '🐈', '😺', '😸', '😻', '🐾'],
  'pizza': ['🍕', '🧀', '🍅', '🥖', '🥨', '🍔'],
  'good': ['👍', '👌', '🆗', '💯', '✔️', '😃'],
  'bad': ['👎', '❌', '⛔', '🚫', '🙅‍♂️', '😞'],
  'yes': ['✅', '👍', '👌', '🙆‍♂️', '✔️', '🆗'],
  'no': ['❌', '👎', '🚫', '⛔', '🙅‍♂️', '😡'],
  'hello': ['👋', '🤚', '🖐️', '✋', '👐', '🤗'],
  'bye': ['👋', '✌️', '🤚', '🖐️', '👊', '🙋‍♂️'],
  'laugh': ['😂', '🤣', '😅', '😆', '😹', '😜'],
  'cool': ['😎', '🤩', '🤙', '👑', '💯', '😏'],
  'angry': ['😠', '😡', '🤬', '💢', '👿', '😤'],
  'confused': ['😕', '🤔', '😵', '😩', '😳', '😖'],
  'surprised': ['😲', '😮', '😳', '😯', '😧', '😱'],
  'bored': ['😐', '😴', '😑', '🙄', '😬', '😒'],
  'celebrate': ['🎉', '🥳', '🎊', '🎈', '🍾', '🎶'],
  'party': ['🥳', '🎉', '🎊', '🍾', '🎈', '🕺'],
  'coffee': ['☕', '🥤', '🍵', '🍶', '🍮'],
  'tea': ['🍵', '☕', '🫖', '🍶', '🥤'],
  'cake': ['🍰', '🎂', '🍩', '🧁', '🍪'],
  'ice_cream': ['🍦', '🍨', '🍧', '🍩', '🍪'],
  'flower': ['🌸', '🌼', '🌻', '🌺', '🌷'],
  'tree': ['🌳', '🌲', '🌴', '🌵', '🌿'],
  'earth': ['🌍', '🌎', '🌏', '🌐', '🌌'],
  'rocket': ['🚀', '🛸', '🚀', '✈️', '🛰'],
  'car': ['🚗', '🚙', '🏎️', '🚓', '🚕'],
  'bike': ['🚴‍♂️', '🚴‍♀️', '🚲', '🛴', '🛹'],
  'computer': ['💻', '🖥️', '📱', '🖨️', '🖱️'],
  'phone': ['📱', '📞', '📲', '☎️', '📟'],
  'book': ['📚', '📖', '📓', '📔', '📒'],
  'pen': ['✏️', '🖊️', '🖋️', '🖌️', '🖍️'],
  'lightbulb': ['💡', '🔦', '✨', '💡', '🌟'],
  'sparkles': ['✨', '🌟', '💫', '🌌', '✨'],
  'trophy': ['🏆', '🏅', '🥇', '🥈', '🥉'],
  'medal': ['🥇', '🥈', '🥉', '🏅', '🏆'],
  'soccer': ['⚽', '🏐', '🏀', '🏈', '🏉'],
  'basketball': ['🏀', '⛹️‍♂️', '⛹️‍♀️', '🏆', '🏅'],
  'football': ['🏈', '🏉', '🏆', '🏅', '⚽'],
  'swimming': ['🏊‍♂️', '🏊‍♀️', '🏊', '🏊‍♂️', '🏊‍♀️'],
  'runner': ['🏃‍♂️', '🏃‍♀️', '🏃', '🏃‍♂️', '🏃‍♀️'],
  'dancer': ['💃', '🕺', '👯‍♂️', '👯‍♀️', '💃'],
  'yoga': ['🧘‍♀️', '🧘‍♂️', '🧘', '🧘‍♀️', '🧘‍♂️'],
  'sushi': ['🍣', '🍱', '🍥', '🍤', '🍚'],
  'taco': ['🌮', '🌯', '🥙', '🥗', '🍜'],
  'hot_dog': ['🌭', '🌭', '🍕', '🍔', '🍟'],
  'popcorn': ['🍿', '🍕', '🍭', '🍬', '🍫'],
  'chocolate': ['🍫', '🍪', '🍩', '🍬', '🍭'],
  'candy': ['🍬', '🍭', '🍫', '🍪', '🍩'],
  'beach': ['🏖️', '🏝️', '🏖️', '🌊', '🌅'],
  'mountain': ['⛰️', '🏔️', '🏞️', '🏕️', '🏔️'],
  'city': ['🏙️', '🌆', '🌇', '🏙️', '🏙️'],
  'house': ['🏡', '🏠', '🏚️', '🏘️', '🏡'],
  'castle': ['🏰', '🏯', '🗼', '🗽', '🏰'],
  'shopping': ['🛍️', '🛒', '👜', '👛', '💳'],
  'money': ['💰', '💵', '💴', '💳', '🪙'],
  'bank': ['🏦', '🏧', '🏤', '🏛️', '🏦'],
  'hospital': ['🏥', '🏨', '🏩', '🏥', '🏥'],
  'school': ['🏫', '🏫', '🏫', '🏫', '🏫'],
  'art': ['🎨', '🖼️', '🖌️', '🖋️', '🎭'],
  'theater': ['🎭', '🎬', '🎥', '🎞️', '🎟️'],
  'movie': ['🎬', '🎥', '📽️', '🍿', '🎞️'],
  'camera': ['📷', '📸', '📹', '📼', '📷'],
  'globe': ['🌐', '🌍', '🌎', '🌏', '🗺️'],
  'mail': ['✉️', '📨', '📬', '📮', '📧'],
};

export function getAlternativeEmojis(word) {
  return alternativeEmojis[word] || [];
}

export function getEmoji(word) {
  return primaryEmojis[word] || null;
}

export default function emojiDictionary() {
  return primaryEmojis;
}