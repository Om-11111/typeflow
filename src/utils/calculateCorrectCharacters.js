function calculateCorrectCharacters(typedText, paragraph) {
  let correctCount = 0;

  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === paragraph.text[i]) {
      correctCount++;
    }
  }

  return correctCount;
}

export default calculateCorrectCharacters;