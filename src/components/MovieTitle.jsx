import { Info, Play } from "lucide-react";

const MovieTitle = ({title,overview})=>{
  
    
    
    return (
        <>
        <div className=" w-max-auto py-3 px-2 w-4/5 lg:w-2/5 flex flex-row mt-16 sm:mt-28 md:place-items-end  h-screen mb-10 md:mt-4 md:pb-10  lg:place-items-end  lg:mb-20 mx-10 lg:mx-20 absolute aspect-video">
        <div>
        <h2 className=" text-xl sm:text-xl  lg:text-6xl  py-3  font-bold uppercase text-white">
{title}
        </h2>
        <div className=" py-3  text-xs sm:text-xs  sm:py-1 font-bold text-white ">
{overview}
        </div>
        <div className=" flex  my-2 ">
            <button className=" flex mx-3 px-4  sm:px-1  sm:py-2 rounded-md lg:mx-5 lg:px-6 py-2  font-semibold shadow-sm shadow-neutral-300  bg-white"> <span className="px-2  "><Play/></span>Play</button>
            <button className=" flex mx-4 px-4 sm:px-1  sm:py-2  rounded-md py-2 lg:px-6 lg:mx-5 font-semibold shadow-sm shadow-neutral-800 bg-neutral-400 text-white"> <span className="px-2"> <Info/></span>More Info</button>
        </div>
        </div>
        
        </div>
        </>
    )
}
export default MovieTitle; 