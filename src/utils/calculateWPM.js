function calculateWPM(correctCharacters, timeLeft) {
  const totalTime = 600;
  const elapsedTime = totalTime - timeLeft;

  if (elapsedTime <= 0) {
    return 0;
  }

  const elapsedMinutes = elapsedTime / 60;

  return Math.round((correctCharacters / 5) / elapsedMinutes);
}

export default calculateWPM;