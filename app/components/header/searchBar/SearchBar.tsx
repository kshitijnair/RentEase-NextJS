"use client"

import { useState } from "react";
import styles from "./styles.module.css";

type SearchBarProps = {
  searchText?: string;
};

const SearchBar = (props: SearchBarProps) => {
  const { searchText } = props;
  const [searchKeyword, setSearchKeyword] = useState("");

  // @ts-ignore
  const inputHandler = (e) => {
    setSearchKeyword(e?.target?.value?.toLowerCase());
    console.log("*** searchKeyword updated to: ", searchKeyword)
  }

  const DEFAULT_SEARCH_TEXT = "type in an address";
  return (
    <div className={styles.searchBarContainer}>
      <input className={styles.searchBarField} type="text" placeholder={searchText} onChange={inputHandler} />
    </div>
  );
};

export default SearchBar;
