import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return (
        <div className="pt-32 px-4 bg-black text-white min-h-screen">
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
}

export default GptSearchPage;