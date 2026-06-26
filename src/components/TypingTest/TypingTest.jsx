import styles from "./TypingTest.module.css";

import Paragraph from "../Paragraph/Paragraph";

function TypingTest({ paragraph, currentIndex }) {
  return (
    <section className={styles.typingTest}>
      <Paragraph
        paragraph={paragraph}
        currentIndex={currentIndex}
      />
    </section>
  );
}

export default TypingTest;