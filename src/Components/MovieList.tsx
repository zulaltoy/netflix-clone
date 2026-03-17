import React from 'react'
import MovieCard from './MovieCard';
import type { MovieListProps, Movie } from './types';
const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
        <ul>
      { movies.map((movie: Movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
      </ul>
    </div>
  )
}

export default MovieList