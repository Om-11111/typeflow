import styles from "./Header.module.css";
import formatTime from "../../utils/formatTime";

function Header({ timeLeft }) {
  return (
    <header className={styles.header}>
      <h1>TypeFlow</h1>

      <time>{formatTime(timeLeft)}</time>
    </header>
  );
}

export default Header;