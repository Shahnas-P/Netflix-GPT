import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieVideos } from "../utils/movieSlice";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movie?.movieVideos);

  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await response.json();
    const results = json?.results;
    const filteredDate = results.filter((item) => item.type === "Trailer");
    const movieTrailer = filteredDate.length ? filteredDate[0] : results[0];
    dispatch(addMovieVideos(movieTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
      ></iframe>
    </>
  );
};
export default VideoBackground;
