import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import axios from "axios";

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=ed56c93c0c4797988b9b1383eee080f1&language=en-US&page=${pageNo}`
      )
      .then(function (response) {
        // console.log(response.data.results);
        setTopRated(response.data.results);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {topRated.map((movieObj) => {
          {
            /* console.log(movieObj); */
          }
          // Only render MovieCard if poster_path is available
          return (
            <Card
              key={movieObj.id}
              name={movieObj.title}
              posterPath={movieObj.poster_path} // Fallback if poster_path is undefined
              moviesObject={movieObj}
            />
          );
        })}
      </div>

      <Pagination
        nextPageFn={handleNext}
        previosuPageFn={handlePrevious}
        pageNumber={pageNo}
      />
    </div>
  );
}

export default TopRated;
