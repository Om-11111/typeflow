import styles from "./RestartButton.module.css";

function RestartButton({ onRestart }) {
  return (
    <button
      className={styles.button}
      onClick={onRestart}
    >
      Restart Test
    </button>
  );
}

export default RestartButton;