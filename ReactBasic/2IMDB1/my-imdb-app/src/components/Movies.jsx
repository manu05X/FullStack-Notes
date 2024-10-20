import MovieCard from "./MovieCard";

// const Movies = () => {
//   return (
//     <div>
//       <div className="text-2xl font-bold text-center m-5">
//         <h1>Trending Movies</h1>
//       </div>
//       <div>
//         <MovieCard />
//       </div>
//     </div>
//   );
// };

// export default Movies;

const Movies = () => {
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
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
