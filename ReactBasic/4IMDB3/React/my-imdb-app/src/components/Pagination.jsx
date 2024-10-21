function Pagination({ nextPageFunction, previousPageFunction, pageNumber }) {
  return (
    <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center">
      <div onClick={previousPageFunction} className="px-8">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNumber}</div>
      <div onClick={nextPageFunction} className="px-8">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
