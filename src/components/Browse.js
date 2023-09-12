import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

export const Browse = () => {
  useNowPlayingMovies();
  const toggle = useSelector((store) => store.GPT?.toggleSearch);
  console.log(toggle);
  return (
    <div>
      <Header />
      {toggle ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
