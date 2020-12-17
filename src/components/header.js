import React from "react";
import Searchbox from "./searchbox";
const Header = ({ setSearchValue, searchWord, setSearchWord }) => {
  return (
    <header>
      <Searchbox
        setSearchValue={setSearchValue}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
    </header>
  );
};
export default Header;
