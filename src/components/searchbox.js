import React, { useState } from "react";
const SearchBox = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchValue(searchWord);
  };
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="serach-box"
          value={searchWord}
          onChange={handleChange}
          placeholder="search"
        />
      </form>
    </>
  );
};
export default SearchBox;
