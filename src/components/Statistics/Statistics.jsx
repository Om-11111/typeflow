import styles from "./Statistics.module.css";

function Statistics() {
  return (
    <section className={styles.statistics}>
      <p>WPM : 0</p>
      <p>Accuracy : 100%</p>
      <p>Mistakes : 0</p>
      <p>Characters : 0 / 500</p>
    </section>
  );
}

export default Statistics;