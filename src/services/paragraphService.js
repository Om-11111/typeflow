import paragraphs from "../data/paragraphs";

export function getRandomParagraph() {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);

  return paragraphs[randomIndex];
}