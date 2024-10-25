import { useEffect, useState } from "react";
import genreids from "../utility/gener";

function WatchList({ WatchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres"); //All Genres is default Genre set to currGenre

  const handleSearch = (event) => {
    setSearch(event.target.value); // change in eventObj of target field/input field we are going to find a value
    //console.log(event.target.value);
  };

  const handleGenerFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    // let temp = WatchList.map((moviesObj) => {
    //   return genreids[moviesObj.genre_ids[0]];
    // });
    // Generate unique genres based on the WatchList data
    let temp = WatchList.map((moviesObj) => genreids[moviesObj.genre_ids[0]]);
    //console.log(temp);

    temp = new Set(temp); // we don't need to create duplicate genre. So set obj allow to store unique values of any type

    // Assign the genres to genreList
    setGenreList(["All Genres", ...temp]);

    //console.log(...temp);
  }, [WatchList]); // we are adding WatchList as dependencies array in the useEffect . So it update as only when WatchList changes.

  // Function to handle sorting the WatchList by ascending ratings
  const handleAscnedingRatings = () => {
    // Sort the WatchList in ascending order based on the 'vote_average' property of each movie object
    let sortedAscending = WatchList.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average; // If A's rating is less than B's, it moves A before B
    });

    // Set the WatchList state with a new sorted array to trigger a re-render
    setWatchList([...sortedAscending]); // Spreading to ensure state updates with a new array reference
  };

  // Function to handle sorting the WatchList by descending ratings
  const handleDescnedingRatings = () => {
    // Sort the WatchList in descending order based on the 'vote_average' property of each movie object
    let sortedDescending = WatchList.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average; // If B's rating is greater than A's, it moves B before A
    });

    // Set the WatchList state with a new sorted array to trigger a re-render
    setWatchList([...sortedDescending]); // Spreading to ensure state updates with a new array reference
  };

  const handleAscnedingPopularity = () => {
    let sortedAscending = WatchList.sort((movieObjA, movieObjB) => {
      return movieObjA.popularity - movieObjB.popularity;
    }); //
    setWatchList([...sortedAscending]);
  };

  const handleDescnedingPopularity = () => {
    let sortedDescending = WatchList.sort((movieObjA, movieObjB) => {
      return movieObjB.popularity - movieObjA.popularity;
    }); //
    setWatchList([...sortedDescending]);
  };

  return (
    <>
      {/* Genre Based Filtering */}
      <div className="flex justify-center m-4">
        {genreList.map((genre, index) => {
          return (
            <div
              key={index}
              onClick={() => handleGenerFilter(genre)} // Handle genre filter click
              className={
                currGenre === genre
                  ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* Search Field Bar */}
      <div className="flex justify-center my-10">
        <input
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch} // onChange we call handleSearch function
          value={search}
        />
      </div>

      {/* Watchlist Table */}
      <div className="m-8">
        <table className="w-full text-center ">
          {/* WatchList Table header */}
          <thead className="border border-gray-200 rounded-lg bg-gray-200">
            <tr>
              <th className="flex justify-center">Name</th>
              <th>
                <i
                  onClick={handleAscnedingRatings}
                  className="fa-solid fa-arrow-up"
                ></i>
                {"  "}
                Ratings{"  "}
                <i
                  onClick={handleDescnedingRatings}
                  className="fa-solid fa-arrow-down"
                ></i>
              </th>
              <th>
                <i
                  onClick={handleAscnedingPopularity}
                  className="fa-solid fa-arrow-up"
                ></i>
                {"  "}
                Popular{"  "}
                <i
                  onClick={handleDescnedingPopularity}
                  className="fa-solid fa-arrow-down"
                ></i>
              </th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>

          {/* WatchList Table Body */}
          <tbody>
            {WatchList.filter((moviesObj) => {
              // Search filter using text search
              //this is a application of method chaning we use for searching
              const matchesSearch = moviesObj.title
                .toLowerCase()
                .includes(search.toLowerCase());

              // Genre filter
              const matchesGenre =
                currGenre === "All Genres" ||
                genreids[moviesObj.genre_ids[0]] === currGenre;

              return matchesSearch && matchesGenre;
            }).map((moviesObj, index) => {
              return (
                <tr key={moviesObj.id || index} className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem] bg-cover"
                      src={`https://image.tmdb.org/t/p/original/${moviesObj.poster_path}`}
                      alt={moviesObj.title}
                    />
                    <div className="mx-10">{moviesObj.title}</div>
                  </td>
                  <td>{moviesObj.vote_average.toFixed(1)}</td>
                  <td>{Math.round(moviesObj.popularity)}</td>
                  <td>{genreids[moviesObj.genre_ids[0]]}</td>
                  <td className="text-red-500 cursor-pointer">Click-Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
