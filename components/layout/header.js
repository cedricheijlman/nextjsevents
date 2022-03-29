import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>NextEvents</a>
      </Link>
      <Link href="/events">
        <a className={styles.option}>Browse All Events</a>
      </Link>
    </header>
  );
};

export default Header;
