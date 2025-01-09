import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const Browse = () => {
  const dispatch  = useDispatch()
  const getNowPlayingMovies = async()=>{
   
    const response =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)

    const json  = await response.json()
    console.log(json);
    
    dispatch(addNowPlayingMovies(json))
    

  }
  useEffect(()=>{
    getNowPlayingMovies()
  },[])
  return (
    <>
      <Header />
      <div className="w-screen h-16 bg-black absolute "></div>
    </>
  );
};
export default Browse;
