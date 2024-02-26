import styles from "./styles.module.css";

type SearchBarProps = {
  searchText?: string;
};

const SearchBar = (props: SearchBarProps) => {
  const DEFAULT_SEARCH_TEXT = "type in an address";
  return (
    <div className={styles.searchBar}>
      {props.searchText ? props.searchText : DEFAULT_SEARCH_TEXT}
    </div>
  );
};

export default SearchBar;
