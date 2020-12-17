import React from "react";
const Searchbox = ({ setSearchValue, searchWord, setSearchWord }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchWord);
    setSearchWord("");
  };
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="serach-box"
        value={searchWord}
        onChange={handleChange}
        placeholder="search"
      />
    </form>
  );
};
export default Searchbox;
