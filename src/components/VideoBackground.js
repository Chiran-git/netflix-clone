import useMovieTrailer from "../utils/useMovieTrailer";


const VideoBackground = ({ movieId, backdropPath }) => {
    const { trailerVideo, imageUrl } = useMovieTrailer(movieId, backdropPath);

    return (
        <div className="w-full h-screen relative overflow-x-hidden">
            {trailerVideo ? (
                <div className="w-full h-full overflow-hidden">
                    <iframe
                        className="w-full aspect-video"
                        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo.key}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <img
                    src={imageUrl}
                    alt="Movie backdrop"
                    className="w-full h-full object-cover"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
        </div>
    );
};

export default VideoBackground;