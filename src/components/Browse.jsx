import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <>
      <Header />
      <div className="w-screen h-16 bg-black absolute "></div>
    </>
  );
};
export default Browse;
