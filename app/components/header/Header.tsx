import UserGroup from "./userGroup/UserGroup";
import SearchBar from "./searchBar/SearchBar";
import styles from './styles.module.css';
import logo from "../../../public/logo.png"
import Icon from "../icon/Icon";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
        <Icon src={logo.src} size='large' />
        <SearchBar searchText="search here..." />
        <UserGroup />
    </div>
  )
}

export default Header;