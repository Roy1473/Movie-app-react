import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Favorite from "./components/favorite";
import Header from "./components/header";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todoList";

const APIKEY = "eb4e48e8cf76334c1aa24b48aaae72ee";
const APIURL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=1`;
//const IMAGEPATH = "https://image.tmdb.org/t/p/w300";
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&page=1&include_adult=false&language=ja-JA&query=`;
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [favorities, setFavorities] = useState([]);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
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
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="movie-content">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            data={movie}
            movie={movie}
            favorities={favorities}
            setFavorities={setFavorities}
          />
        ))}
      </div>
      <div className="favorite-component">
        <h1>お気に入り</h1>
        {favorities.map((favorite) => (
          <Favorite key={favorite.id} data={favorite} favorite={favorite} />
        ))}
      </div>
      <div className="todo-content">
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          count={count}
          setCount={setCount}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
