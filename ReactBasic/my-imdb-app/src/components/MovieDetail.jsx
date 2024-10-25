import { useEffect, useState } from "react";
import axios from "axios";
import CastDetails from "./CastDetails";
import CrewDetails from "./CrewDetails";
import Ratings_popularities from "./Ratings_popularities";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [MovieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ed56c93c0c4797988b9b1383eee080f1&language=en-US&append_to_response=credits,videos`
      )
      .then(function (res) {
        setMovieDetails(res.data);
      });
  }, [id]);

  const {
    title,
    genres,
    backdrop_path,
    videos,
    credits,
    popularity,
    vote_average,
    revenue,
  } = MovieDetails;

  return (
    <>
      <h1 className="text-white flex items-center justify-center py-4 font-medium text-4xl hover:scale-110  cursor-pointer ">
        {title}
      </h1>
      <div className="flex items-center justify-center mb-4">
        {revenue && (
          <Ratings_popularities
            rating={vote_average.toFixed(1)}
            popularity={popularity.toFixed(2)}
            revenues={revenue / 1000000}
          />
        )}
      </div>
      <div
        className="h-[20vh] md:h-[80vh]  flex flex-row items-center justify-center mt-7 bg-black/10 bg-blend-multiply rounded-3xl h-[60rem]  overflow-hidden bg-cover bg-center pl-5 pt-4 pb-6 text-white bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      ></div>
      <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">
        <div className="text-lg text-gray-200 mt-2  pl-5 pr-2">
          {" "}
          Genres :
          {genres &&
            genres.map((genre) => (
              <Link key={genre.id} className="mr-3">
                {" "}
                {genre.name},
              </Link>
            ))}
        </div>
        <div className=" text-white mt-4 flex space-x-3 items-center pl-5 gap-5">
          {" "}
          Watch Trailer
          {videos && (
            <Link
              to={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
              class="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block"
            >
              Watch
            </Link>
          )}
        </div>
      </div>

      <div className="text-2xl font-bold text-center m-5">
        <h2 className="text-white font-bold mb-5">Cast</h2>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {credits &&
            credits.cast
              .slice(0, 8)
              .map((cast) => (
                <CastDetails
                  key={cast.id}
                  imageURL={cast.profile_path}
                  name={cast.name}
                  Charecter={cast.character}
                />
              ))}
        </div>
      </div>

      <div className="text-2xl font-bold text-center m-5">
        <h2 className="h2 text-white font-bold mb-5">Crew</h2>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {credits &&
            credits.crew
              .slice(0, 8)
              .map((crew) => (
                <CrewDetails
                  key={crew.id}
                  imageURL={crew.profile_path}
                  name={crew.name}
                  department={crew.known_for_department}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
