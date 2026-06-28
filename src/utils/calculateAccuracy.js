function calculateAccuracy(correctCharacters, typedCharacters) {
  if (typedCharacters === 0) {
    return 100;
  }

  return Math.round((correctCharacters / typedCharacters) * 100);
}

export default calculateAccuracy;