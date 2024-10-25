import { MovieContext } from "./MovieContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Card({ name, posterPath, moviesObject }) {
  const navigate = useNavigate();
  let { watchlist, handleAddtoWatchlist, handleDeleteWatchlist } =
    useContext(MovieContext);

  function doseContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === moviesObject.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <div
        onClick={() => {
          navigate(`/MovieDetail/${moviesObject.id}`);
        }}
        className="h-[35vh] w-[250px] bg-cover flex items-end rounded-lg hover:scale-110 flex-col justify-between duration-300"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
        }}
      >
        {doseContain(moviesObject) ? (
          <div
            onClick={() => handleDeleteWatchlist(moviesObject)}
            className="flex justify-center h-8 items-center w-8 rounded-lg hover:backdrop-blur-lg text-xl cursor-pointer"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchlist(moviesObject)}
            className="flex  justify-center h-8 items-center w-8 rounded-lg  text-xl  cursor-pointer  hover:backdrop-blur-lg"
          >
            &#10084;
          </div>
        )}
      </div>
      <div className="text-white w-[250px] text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {name}
      </div>
    </div>
  );
}

export default Card;
