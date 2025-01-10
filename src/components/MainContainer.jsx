import { useSelector } from 'react-redux';
import MovieTitle from './MovieTitle';
import VideoBackground from './VideoBackground';
const MainContainer = ()=>{
    const movies = useSelector((store)=>store.movie?.nowPlayingMovies?.results)
    if(!movies)return null;
const mainMovie = movies[0]
const {title,overview,id} = mainMovie
console.log(title);
console.log((overview));



    return (
        <>
        <div className="border border-red-800 w-screen h-screen h-max-auto w-max-auto  flex flex-col  ">
            <MovieTitle title={title} overview={overview} />
            <VideoBackground id={id} />
        </div>
        </>
    )
}
export default MainContainer; 