import React, { useContext, useEffect, useState } from "react";
import genreids from "../utility/gener"; // Import genre ids
import { MovieContext } from "./MovieContext"; // Import the MovieContext

function WatchList() {
  const { watchlist, setWatchlist, DeleteFromWatchList } =
    useContext(MovieContext); // Use context for managing watchlist state
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres"); // Default genre

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleGenreFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    // Generate unique genres based on the watchlist data
    let temp = watchlist.map((moviesObj) => genreids[moviesObj.genre_ids[0]]);
    temp = new Set(temp); // Ensure unique genres
    //console.log(temp);

    setGenreList(["All Genres", ...temp]);
  }, [watchlist]); // Update when watchlist changes

  // Function to handle sorting the WatchList by ascending ratings
  const handleAscnedingRatings = () => {
    // Sort the WatchList in ascending order based on the 'vote_average' property of each movie object
    let sortedAscending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average; // If A's rating is less than B's, it moves A before B
    });

    // Set the WatchList state with a new sorted array to trigger a re-render
    setWatchlist([...sortedAscending]); // Spreading to ensure state updates with a new array reference
  };

  // Function to handle sorting the WatchList by descending ratings
  const handleDescnedingRatings = () => {
    // Sort the WatchList in descending order based on the 'vote_average' property of each movie object
    let sortedDescending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average; // If B's rating is greater than A's, it moves B before A
    });

    // Set the WatchList state with a new sorted array to trigger a re-render
    setWatchlist([...sortedDescending]); // Spreading to ensure state updates with a new array reference
  };

  const handleAscnedingPopularity = () => {
    let sortedAscending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.popularity - movieObjB.popularity;
    }); //
    setWatchlist([...sortedAscending]);
  };

  const handleDescnedingPopularity = () => {
    let sortedDescending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.popularity - movieObjA.popularity;
    }); //
    setWatchlist([...sortedDescending]);
  };

  return (
    <>
      {/* Genre Filtering */}
      <div className="flex justify-center m-4">
        {genreList.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleGenreFilter(genre)}
            className={
              currGenre === genre
                ? "mx-4 flex justify-center items-center bg-purple-400 h-[3rem] w-[9rem] text-black font-medium border rounded-xl"
                : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-10">
        <input
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* Watchlist Table */}
      <div className="m-8">
        <table className="w-full text-center">
          <thead className="border border-gray-200 rounded-lg bg-gray-200">
            <tr>
              <th className="flex justify-center">Name</th>
              <th>
                <i
                  onClick={handleAscnedingRatings}
                  className="fa-solid fa-arrow-up"
                ></i>
                {"  "}Ratings{"  "}
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
                {"  "}Popular{"  "}
                <i
                  onClick={handleDescnedingPopularity}
                  className="fa-solid fa-arrow-down"
                ></i>
              </th>
              <th>Genre</th>
              <th>Delete Movie</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((moviesObj) => {
                // Filter based on search and genre
                const matchesSearch = moviesObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
                const matchesGenre =
                  currGenre === "All Genres" ||
                  genreids[moviesObj.genre_ids[0]] === currGenre;
                return matchesSearch && matchesGenre;
              })
              .map((moviesObj, index) => (
                <tr key={moviesObj.id || index} className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem] bg-cover"
                      src={`https://image.tmdb.org/t/p/original/${moviesObj.poster_path}`}
                      alt={moviesObj.title}
                    />
                    <div className="mx-10 text-white">{moviesObj.title}</div>
                  </td>
                  <td className="text-white">
                    {moviesObj.vote_average.toFixed(1)}
                  </td>
                  <td className="text-white">
                    {Math.round(moviesObj.popularity)}
                  </td>
                  <td className="text-white">
                    {genreids[moviesObj.genre_ids[0]]}
                  </td>
                  <td
                    className="text-red-500 cursor-pointer"
                    onClick={() => DeleteFromWatchList(moviesObj)} // Use context delete function
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
