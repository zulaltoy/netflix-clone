import React from "react";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({movie}) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105
      hover:shadow-xl w-[7rem] h-[9.8rem] rounded-sm">
      <img
        src={movie.poster_path ? TMDB_IMAGE_BASE_URL + movie?.poster_path : "/placeholder.svg"}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
    </div>
  );
};

export default MovieCard;
