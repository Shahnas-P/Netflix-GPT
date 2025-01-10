import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieVideos } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = ({id})=>{
    
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
}
export default useMovieTrailer;