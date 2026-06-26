import styles from "./Paragraph.module.css";

function Paragraph({ paragraph, typedText, currentIndex }) {
  return (
    <section className={styles.paragraph}>
      <p>
        {paragraph.text.split("").map((character, index) => {
          let className = "";

          if (index < typedText.length) {
            className =
              typedText[index] === character
                ? styles.correctCharacter
                : styles.incorrectCharacter;
          } else if (index === currentIndex) {
            className = styles.currentCharacter;
          }

          return (
            <span
              key={index}
              className={className}
            >
              {character}
            </span>
          );
        })}
      </p>
    </section>
  );
}

export default Paragraph;