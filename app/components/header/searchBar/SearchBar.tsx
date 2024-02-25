type SearchBarProps = {
    searchText?: string,
}

const SearchBar = (props: SearchBarProps) => {
  const DEFAULT_SEARCH_TEXT = "default: type in an address";
  return (
   <div>This will be the SearchBar :D with text: {props.searchText ? props.searchText : DEFAULT_SEARCH_TEXT}</div>
  );
};

export default SearchBar;
