function Ratings_popularities({ rating, popularity, revenues }) {
  return (
    <div>
      <div className=" gap-10 grid-cols-2 flex hover:scale-110 justify-between cursor-pointer">
        <div className="font-black text-yellow-500 flex flex-col ">
          <span className="text-yellow-500 text-xl">IMDB SCORE</span>
          <span className="text-3xl ml-8 flex gap-x-1 items-center group-hover:text-yellow-600">
            {rating} &#11088;
          </span>
        </div>

        <div className="font-black  text-red-500 flex flex-col">
          <span className="text-red-500 text-xl">POPULARITY</span>
          <span className="text-3xl ml-1 flex gap-x-1 items-center">
            {popularity} &#128293;
          </span>
        </div>

        <div className=" font-black text-blue-500 flex  flex-col">
          <span className="text-blue-500 text-xl">BOX OFFICE</span>
          <span className="text-3xl flex gap-x-1 items-center">
            {revenues} M &#128176;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Ratings_popularities;
