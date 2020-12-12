import React, { useState } from "react";
const Header = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchValue(searchWord);
  };
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="serach-box"
          value={searchWord}
          onChange={handleChange}
          placeholder="search"
        />
      </form>
    </header>
  );
};
export default Header;
