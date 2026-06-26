import styles from "./RestartButton.module.css";

function RestartButton() {
  return (
    <button className={styles.button}
    disabled>
      Restart Test
    </button>
  );
}

export default RestartButton;