import Link from "next/link";
import styles from "./styles.module.css";

const MenuBar = () => {
  return (
    <div className={styles.menuBarContainer}>
      <ul className={styles.menuBar}>
        {/* <li className={styles.menuItem}>Home</li> */}
        <li className={styles.menuItem}>
          <Link href={`/users`} />
          Messages
        </li>
        <li className={styles.menuItem}>
          <Link href={`/users`} />
          Map
        </li>
        <li className={styles.menuItem}>Settings</li>
      </ul>
    </div>
  );
};

export default MenuBar;
