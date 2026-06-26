import styles from "./Header.module.css";

function Header({ timeLeft }) {

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  return (
    <header className={styles.header}>
      <h1>TypeFlow</h1>

      <time>
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </time>
    </header>
  );
}

export default Header;