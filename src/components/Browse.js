import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    const showGptSearch = useSelector(state => state.gpt.showGptSearch);
    useNowPlayingMovies();

    return (
        <div className="bg-black relative">
            <Header />
            {showGptSearch ? (
                <GptSearchPage />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    )
}

export default Browse;