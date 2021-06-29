import { MovieCard } from "../components/MovieCard";
import { MovieProps } from "../interfaces/MovieProps";
interface ContentProps {
  movies: any;
}

export function Content(props: ContentProps) {
  // Complete aqui
  return (
    <main>
      <div className="movies-list">
        {props.movies.map((movie: MovieProps) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
