import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

/*
const Movies = () => {
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div>
        <MovieCard />
      </div>
    </div>
  );
};

export default Movies;
*/

const Movies = () => {
  //This useEffect runs only once, when the component is first mounted. It does not run on updates (when the state changes).
  //The empty array [] tells React that this effect has no dependencies, so it will not re-run unless the component unmounts or remounts.
  /* --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
   --url 'https://api.themoviedb.org/3/trending/movie/day?api_key=<PROVIDE_API_KEY>&language=en-US'

   axios is a promise base library they initiate a promise and then resolve it
   we can use fetch also but we need to write one extra step to convert the data to json object that is fetched. But in axios it is pre converted to json.


   Now we get the data from TMDB url and we can use it using the useState by creating a state variable. 
   We can create a state variable and store it in the state and make use of it from that to render it.
  */

  const [moviesData, setMoviesData] = useState([]);

  //console.log("This is the movies data : " + moviesData);

  useEffect(() => {
    console.log("Use effect started running");
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=ed56c93c0c4797988b9b1383eee080f1&language=en-US"
      )
      .then(function (res) {
        //console.log("Data is fetched from TMDB URL");
        //console.log(res.data.results);

        //set the moviesData with all the results returned from the TMDB url
        setMoviesData(res.data.results);
      });
  }, []);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {/* <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard /> */}

        {/* Make use of map to access data from moviesData and put them in <MovieCard /> component*/}
        {moviesData.map((moviesObj, index) => {
          return (
            <MovieCard
              key={index} // Add key prop using index
              name={moviesObj.title}
              posterUrl={moviesObj.poster_path}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Movies;

/*
flex: This class applies Flexbox layout to the container, allowing for flexible positioning of child elements (the MovieCard components).
justify-evenly: This class distributes space evenly between the child elements, ensuring that there is equal space around each MovieCard. This means that the first and last items will be flush with the edges of the container, and the remaining items will have equal space between them.
flex-wrap: This class allows the child elements to wrap onto multiple lines if there isn't enough space in one line. This is particularly useful for responsive designs where the number of visible cards may change based on screen size.
gap-8: This class adds a gap (spacing) of a specific size (usually defined in the framework) between each child element. In this case, it creates an 8-unit gap between the MovieCard components.

Child Components
<MovieCard />: These are instances of a React component named MovieCard. Each instance represents an individual movie card that will be displayed within the container. The number of MovieCard components can be adjusted based on your needs.

*/
