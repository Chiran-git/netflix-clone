import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import MovieRow from "./MovieRow";
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const movies = useSelector(store => store.movies);
    return (
        <div className="relative z-10">
            <MovieRow title="Popular on Netflix" movies={movies.popularMovies} />
            <MovieRow title="Top Rated" movies={movies.topRatedMovies} />
            <MovieRow title="Upcoming Movies" movies={movies.upcomingMovies} />
            <MovieRow title="Now Playing" movies={movies.nowPlayingMovies?.slice(1)} />
        </div>
    )
}

export default SecondaryContainer;