import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const APIKEY = "eb4e48e8cf76334c1aa24b48aaae72ee";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=eb4e48e8cf76334c1aa24b48aaae72ee&sort_by=popularity.desc&page=1";
const IMAGEPATH = "https://image.tmdb.org/t/p/w300";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=eb4e48e8cf76334c1aa24b48aaae72ee&page=1&include_adult=false&language=ja-JA&query=";
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);
  return (
    <div>
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
