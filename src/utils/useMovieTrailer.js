import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useCallback, useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId, backdropPath) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    const dispatch = useDispatch();
    const imageUrl = backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : '';

    const getMovieVideos = useCallback(async () => {
        if (!movieId) return;
        
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                API_OPTIONS
            );
            const data = await response.json();

            const trailer = data.results?.find(
                (video) => video.type === "Trailer" && video.official && video.site === "YouTube"
            ) || null;

            if (trailer) {
                dispatch(addTrailerVideo(trailer));
            }
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    }, [movieId, dispatch]);

    useEffect(() => {
        getMovieVideos();
    }, [getMovieVideos]);

    return { trailerVideo, imageUrl };
};

export default useMovieTrailer;