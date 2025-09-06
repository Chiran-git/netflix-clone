import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    const rowRef = useRef(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left' 
                ? scrollLeft - clientWidth 
                : scrollLeft + clientWidth;
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-0.5 md:space-y-2 px-4 md:px-16 mb-8">
            <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] 
                transition duration-200 hover:text-white md:text-2xl">
                {title}
            </h2>
            <div className="group relative md:-ml-2">
                <ChevronLeftIcon 
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer 
                        opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-black 
                        bg-opacity-70 text-gray-200 rounded-full p-1 ${!isMoved && 'hidden'}`}
                    onClick={() => handleClick('left')}
                />
                
                <div 
                    ref={rowRef}
                    className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide 
                        md:space-x-2.5 md:p-2"
                >
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

                <ChevronRightIcon 
                    className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer 
                        opacity-0 transition hover:scale-125 group-hover:opacity-100 
                        bg-black bg-opacity-70 text-gray-200 rounded-full p-1"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
};

export default MovieList;
