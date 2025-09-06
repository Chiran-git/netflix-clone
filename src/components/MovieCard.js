const MovieCard = ({ movie }) => {
    return (
        <div 
            className="relative min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105"
        >
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-sm object-cover md:rounded"
            />
        </div>
    );
}

export default MovieCard;