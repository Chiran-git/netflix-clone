import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);

  if(!movieNames || !movieResults) return;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Movie Suggestions</h2>
      <p className="text-gray-400">{movieNames.join(', ')}</p>
      {
        movieNames.map((movieName, index) => (
          <MovieList title={movieName} movies={movieResults[index]} />
        ))
      }
      
    </div>
  );
};

export default GptMovieSuggestions;