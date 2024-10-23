import React, { useState, Suspense } from "react";

function MovieData() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    // Dynamically import i.e the movies data only loaded when the button is clicked
    import("./data").then((module) => {
      console.log(module.moviesData);
      setMovies(module.moviesData);
    });
  };

  return (
    <div>
      <button onClick={getMovies}>Show Movies</button>
      <Suspense fallback={<p>Loading...</p>}>
        <p>{movies.length > 0 ? JSON.stringify(movies) : " "}</p>
      </Suspense>
    </div>
  );
}

export default MovieData;

/*  

Explanation:
    React.lazy: Used for dynamic imports. Here, instead of importing moviesData at the top of the file, we use React.lazy to import it only when the button is clicked (getMovies function).
    loadMoviesData: The loadMoviesData function uses dynamic imports (import("./data")), which ensures that the module (data.js) is loaded only when the button is clicked, rather than at the initial load.
    Suspense: React’s Suspense component displays a fallback (e.g., "Loading...") while the dynamically imported module is being loaded.

Benefits:
    Reduced Initial Bundle Size: Since the moviesData is only loaded when requested, the initial bundle size is smaller, improving initial page load performance.
    On-Demand Data Loading: The data will only be loaded and rendered when the user clicks the button, ensuring optimal performance.


Notes:
This method is particularly useful for large datasets or when the data isn't immediately needed.
You can adjust the fallback in Suspense to display custom loaders or spinners if needed.

*/

/*
Behavior:
    Data Loading: In this version, the moviesData is rendered immediately when the component loads. As soon as the component is mounted, the entire moviesData is shown in the DOM.
    Bundler Impact: Since moviesData is rendered immediately, it is included in the initial bundle and displayed as soon as the component renders. There is no user interaction required to load the data.
    Performance Consideration: This version does not wait for any user action to display the data, so it is less performant if moviesData is large. Loading all data immediately can affect the initial rendering speed, especially on slower devices or with large datasets.

Differences in Bundling and Data Handling:
    First Version: Although the data (moviesData) is part of the bundle, it is only rendered after user interaction, meaning the initial UI load is lighter.
    Second Version: The data is loaded and rendered right away as part of the initial bundle, leading to potential performance issues if the data set is large or complex, since all of it is processed immediately.

Advantage of the First Version:
    Better performance in terms of initial rendering.
    More control over when the data is displayed, providing a smoother user experience if data is large.

Advantage of the Second Version:
    Simpler implementation, ideal when performance isn’t an issue or if the data set is small and doesn’t affect rendering speed.


*/

/*

// making movies data available on button
function MovieData() {
  const [movies, setMovieData] = useState([]);

  const getMovies = () => {
    setMovieData(moviesData);
  };
  return (
    <div>
      <button onClick={getMovies}>Show Movies</button>
      <p>{movies.length > 0 ? JSON.stringify(movies) : " "}</p>
    </div>
  );
}

export default MovieData;
*/

/*

// All data is loaded in page bundle at first only
function MovieData() {
  return (
    <div>
      <p>{JSON.stringify(moviesData)}</p>
      </div>
    );
  }
  
  export default MovieData;

*/

/*

Behavior:
    Data Loading: In this version, the moviesData is not rendered or loaded in the DOM until the user clicks the "Show Movies" button.
    Bundler Impact: Although moviesData is imported when the component is loaded (so it is still part of the bundle), it is not immediately rendered. The component will show an empty UI initially and render the data only after the button click.
    Performance Consideration: It gives more control over when the data is displayed, which can be useful for user interaction scenarios. However, it doesn't reduce the bundle size as the data is still part of the bundle from the start.
*/
