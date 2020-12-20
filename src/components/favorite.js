import React from "react";
const IMAGEPATH = "https://image.tmdb.org/t/p/w300";
const Favorite = ({ favorite }) => {
  return (
    <div className="favoriteItems">
      <div className="favorite-content">
        <img src={IMAGEPATH + favorite.poster_path} alt={favorite.title} />
      </div>
    </div>
  );
};
export default Favorite;
