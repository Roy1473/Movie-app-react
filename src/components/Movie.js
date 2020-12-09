import React from "react";
const IMAGEPATH = "https://image.tmdb.org/t/p/w300";
const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="Movie">
    this is movie component
    <img src={IMAGEPATH + poster_path} alt={title} />
  </div>
);

export default Movie;
