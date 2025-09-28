import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
//import openai from "../utils/openai"
import React, { useRef } from 'react';
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  async function searchMovieTmdb(movie) {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json  = await data.json();
    return json.results;
  }

  async function handleSearchClick() {
    /*const gptQuery = `Act as an movie recommendation system and suggest some movies for the query "${searchText.current.value}" and only give me names of 5 movies, 
      comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Krish, Deewar`
    const gptResults = await openai.chat.completions.create({
      messages: [{role: "user", content: "comedy movies"}],
      model: "gpt-3.5-turbo"
    })

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");*/
    const gptMovies = ["Hera Pheri", "Phir Hera pheri", "Van Helsing", "American Pie"];

    const promiseArray = gptMovies.map((movie) => {
      return searchMovieTmdb(movie)
    });

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="What would you like to watch today?"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-600 hover:bg-red-700 
          text-white rounded-lg font-semibold transition-colors duration-200"
          onClick={handleSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;