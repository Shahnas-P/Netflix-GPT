import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ id }) => {
  useMovieTrailer({id})

  const trailerVideo = useSelector((store) => store.movie?.movieVideos);


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
