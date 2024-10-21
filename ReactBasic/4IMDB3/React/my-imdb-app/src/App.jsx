import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  //create the state to hold movies watchlist
  const [watchlist, setWatchlist] = useState([]);

  const handleAddtoWatchList = (moviesObj) => {
    // before adding the moviesObj i.e(curr movie added to watchlist) we will first add previous watchlist to newWatchlist and then add curr moviesObj to newList. This makes our  watchlist to maintain the previous data in watchlist
    let updatedWatchlist = [...watchlist, moviesObj];

    // settingup the watchlist
    setWatchlist(updatedWatchlist);
    console.log(updatedWatchlist);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies handleAddtoWatchListProp={handleAddtoWatchList} />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <>
                <WatchList />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*

TMDB API KEY : ed56c93c0c4797988b9b1383eee080f1

API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDU2YzkzYzBjNDc5Nzk4OGI5YjEzODNlZWUwODBmMSIsIm5iZiI6MTcyOTQ5MjM0Ny45MTczNzEsInN1YiI6IjVmMDU1OWVjZGQyNTg5MDAzN2EwYzY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BKSJP1xT5x4H1gw6zm1zBsgd_8Ni5X2aDUVC78C0vRI
*/

/*
we are creating handleAddtoWatchList in App.jsx i.e common to all components but we donot need(no work for this function) function here.
But here we can not access MovieCard directly, so MovieCard is accessible to Movies component, therefor we first move our watchlist to Movie component then from their we can pass it as a prop to MovieCard.

This phenomenon is known as PropDrilling

App.jsx --> <Movies handleAddtoWatchListProp={handleAddtoWatchList} />
|
V
Movie.jsx --> <MovieCard name={moviesObj.title} posterUrl={moviesObj.poster_path} movieObject={moviesObj}handleAddtoWatchListProps={handleAddtoWatchListProp}/>
|
V
MovieCard.jsx -> <div onClick={() => handleAddtoWatchListProps(movieObject)}>&#128525;</div> we are using the handleAddtoWatchList function
of App.jsx in MovieCard.jsx through PropDrilling



In this case:

1> App holds the state for the watchlist and the function handleAddtoWatchList to update it.
2> This function is passed down as a prop (handleAddtoWatchListProp) from App to Movies.
3> In the Movies component, it's passed further down to MovieCard as handleAddtoWatchListProps.
4> Finally, in the MovieCard component, the function is invoked when the user clicks on the heart emoji, adding a movie to the watchlist.


*/
