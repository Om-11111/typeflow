import styles from "./Statistics.module.css";

function Statistics({
  wpm,
  correctCharacters,
  accuracy,
}) {
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

      <div className={styles.card}>
        <h3>Accuracy</h3>
        <p>{accuracy}%</p>
      </div>
    </section>
  );
}

export default Statistics;