import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(!movies) return;

    const mainMovie = movies[0];
    const { id, original_title, overview, backdrop_path } = mainMovie;
    
    return (
        <div className="relative h-screen">
            <VideoBackground movieId={id} backdropPath={backdrop_path} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer;