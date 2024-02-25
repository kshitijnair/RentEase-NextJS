import UserGroup from "./userGroup/UserGroup";
import SearchBar from "./searchBar/SearchBar";

const Header = () => {
  return (
    <div className="headerWrapper">
        <SearchBar searchText="text from <Header>" />
        <UserGroup />
    </div>
  )
}

export default Header;