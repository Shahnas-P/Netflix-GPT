import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ id }) => {
  useMovieTrailer({id})

  const trailerVideo = useSelector((store) => store.movie?.movieVideos);


  return (
    <>
      <iframe
      className="w-screen bg-gradient-to-r from-neutral-800 to-neutral-500  aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
      ></iframe>
    </>
  );
};
export default VideoBackground;
