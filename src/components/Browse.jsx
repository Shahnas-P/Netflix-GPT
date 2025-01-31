import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies()
  return (
    <>
      <Header />
      {/* <div className="w-screen h-screen opacity-30  bg-black absolute "></div> */}
      <MainContainer/>
      <SecondaryContainer/>
    </>
  );
};
export default Browse;
