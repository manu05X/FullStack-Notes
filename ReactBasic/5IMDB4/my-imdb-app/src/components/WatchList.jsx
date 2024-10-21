function WatchList({ WatchList }) {
  return (
    <>
      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          placeholder="Search Movies"
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
                <i className="fa-solid fa-arrow-up"></i> Ratings{" "}
                <i className="fa-solid fa-arrow-down"></i>
              </th>
              <th>Popular</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>

          {/* WatchList Table Body */}
          <tbody>
            {WatchList.map((moviesObj, index) => {
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
                  <td>{moviesObj.vote_average}</td>
                  <td>{moviesObj.popularity}</td>
                  <td>Genre</td>
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
