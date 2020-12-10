import React from "react";
const IMAGEPATH = "https://image.tmdb.org/t/p/w300";
const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={IMAGEPATH + poster_path} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
    <div className="movie-overview">
      <h2>Overview</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
