import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector(store => store.movies);
  return (
    <div className="relative z-10 -mt-20">
      <MovieList title="Popular on Netflix" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies?.slice(1)} />
    </div>
  )
}

export default SecondaryContainer;