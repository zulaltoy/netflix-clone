import { useRef } from "react";
import MovieCard from "./MovieCard";
import type { MovieListProps, Movie } from "./types";

const MovieList = ({ movies }: MovieListProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 400, behavior: "smooth" });

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => scroll(-1)} className="text-white text-2xl px-2">&#8249;</button>
      <ul ref={ref} className="flex overflow-x-scroll space-x-4 py-4 scrollbar-hide">
        {movies.map((movie: Movie) => (
          <li key={movie.id}><MovieCard movie={movie} /></li>
        ))}
      </ul>
      <button onClick={() => scroll(1)} className="text-white text-2xl px-2">&#8250;</button>
    </div>
  );
};

export default MovieList;
