import UserGroup from "./userGroup/UserGroup";
import SearchBar from "./searchBar/SearchBar";
import MenuBar from "./menuBar/MenuBar";
import styles from "./styles.module.css";
import logo from "../../../public/logo.png";
import Icon from "../icon/Icon";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      {/** TODO: add classnames for components as props for custom styling from
      parent components */}
      <Link href="/home">
        <Icon src={logo.src} size="large" />
      </Link>
      <MenuBar />
      <SearchBar searchText="search here..." />
      <UserGroup />
    </div>
  );
};

export default Header;
