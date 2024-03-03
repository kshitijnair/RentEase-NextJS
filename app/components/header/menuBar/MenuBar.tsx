import styles from './styles.module.css'

const MenuBar = () => {
  return (
    <div className={styles.menuBarContainer}>
        <ul className={styles.menuBar}>
            {/* <li className={styles.menuItem}>Home</li> */}
            <li className={styles.menuItem}>Messages</li>
            <li className={styles.menuItem}>Map</li>
            <li className={styles.menuItem}>Settings</li>
        </ul>
    </div>
  )
}

export default MenuBar;