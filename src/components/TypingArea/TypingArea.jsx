import styles from "./TypingArea.module.css";

function TypingArea({ typedText, onTyping }) {
  return (
    <section className={styles.typingArea}>
      <textarea
        value={typedText}
        onChange={(event) => onTyping(event.target.value)}
        placeholder="Start typing..."
      />
    </section>
  );
}

export default TypingArea;