import styles from "./Statistics.module.css";

function Statistics({ wpm, correctCharacters }) {
  return (
    <section className={styles.statistics}>
      <div className={styles.card}>
        <h3>WPM</h3>
        <p>{wpm}</p>
      </div>

      <div className={styles.card}>
        <h3>Correct</h3>
        <p>{correctCharacters}</p>
      </div>
    </section>
  );
}

export default Statistics;