import React from "react";
import Favorite from "./favorite";
const IMAGEPATH = "https://image.tmdb.org/t/p/w300";
const Movie = ({ title, movie, favorities, setFavorities }) => {
  const addFavorite = (movieItem) => {
    const favoriteList = [...favorities, movieItem];
    console.log(favoriteList);
    setFavorities(favoriteList);
  };
  return (
    <>
      <div className="movie" onClick={() => addFavorite(movie)}>
        <img src={IMAGEPATH + movie.poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span>{movie.vote_average}</span>
        </div>
        <div className="movie-overview">
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
};

export default Movie;
