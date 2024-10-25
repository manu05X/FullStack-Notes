import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./Pagination";

function Upcoming() {
  const [upcoming, setupcoming] = useState([]);
  const [pageNo, setPageno] = useState(1);

  const handleNext = () => {
    setPageno(pageNo + 1);
  };
  const handlePrevious = () => {
    if (pageNo === 1) {
      setPageno(pageNo);
    }
    setPageno(pageNo - 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=ed56c93c0c4797988b9b1383eee080f1&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setupcoming(res.data.results);
      });
  }, [pageNo]);
  return (
    <div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {upcoming.map((movieObj) => {
          return (
            <Card
              key={movieObj.id}
              name={movieObj.title}
              posterPath={movieObj.poster_path}
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

export default Upcoming;
