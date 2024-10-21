function WatchList() {
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
        </table>
      </div>
    </>
  );
}

export default WatchList;
