import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Header from "./components/header";
import Searchbox from "./components/searchbox";
import SearchBox from "./components/searchbox";

const APIKEY = "eb4e48e8cf76334c1aa24b48aaae72ee";
const APIURL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=1`;
//const IMAGEPATH = "https://image.tmdb.org/t/p/w300";
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&page=1&include_adult=false&language=ja-JA&query=`;
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setMovies(data.results);
        }
      });
  };
  useEffect(() => {
    if (searchValue) {
      getMovies(SEARCHAPI + searchValue);
    } else {
      getMovies(APIURL);
    }
  }, [searchValue]);
  return (
    <>
      <div className="header-component">
        <Header
          searchBox={SearchBox}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="movie-content">
        {movies.map((movie) => (
          <Movie key={movie.id} data={movie} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
