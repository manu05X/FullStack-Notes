function Banner() {
  return (
    <div>
      <div
        className="h-[20vh] md:h-[75vh] bg-cover flex items-end"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)",
        }}
      >
        <div className="text-white w-full text-center text-2xl">
          Avenger Endgame
        </div>
      </div>
    </div>
  );
}

export default Banner;

/*
important for poster
bg-cover : it will try to fit in the hole image in tthe hight and width given by us 
*/
