import Link from "next/link";
import styles from "./styles.module.css";

const MenuBar = () => {
  return (
    <div className={styles.menuBarContainer}>
      <ul className={styles.menuBar}>
        {/* <li className={styles.menuItem}>Home</li> */}
        <li className={styles.menuItem}>
          <Link href={`/users`}>Mesages</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href={`/users`}>Map</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href={'/users'}>Settings</Link></li>
      </ul>
    </div>
  );
};

export default MenuBar;
