// Simulating a sentiment analysis function that mimics TextBlob's output
export function analyzeSentiment(text) {
  // Simulated sentiment polarity: Positive (> 0.1), Neutral (-0.1 to 0.1), Negative (< -0.1)
  const lowerText = text.toLowerCase();
  
  let sentiment = 0; // Neutral by default

  if (lowerText.includes("happy") || lowerText.includes("love") || lowerText.includes("good")) {
    sentiment = 0.5; // Positive
  } else if (lowerText.includes("sad") || lowerText.includes("angry") || lowerText.includes("bad")) {
    sentiment = -0.5; // Negative
  }

  return sentiment; // Range: -1 (negative) to +1 (positive)
}
