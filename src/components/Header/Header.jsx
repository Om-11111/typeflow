import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>TypeFlow</h1>

      <span>10:00</span>
    </header>
  );
}

export default Header;