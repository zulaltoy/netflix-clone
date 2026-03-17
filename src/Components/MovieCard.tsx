import React from "react";
import { Card } from "@/components/ui/card";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({movie}) => {
  return (
    <div>
      <Card>
        <img
        src={movie.poster_path ? TMDB_IMAGE_BASE_URL + movie?.poster_path : "/placeholder.svg"}
        alt={movie.title}/>
      </Card>
      
    </div>
  );
};

export default MovieCard;
