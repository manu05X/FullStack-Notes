import Logo from "../MovieLogo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} />
      <Link to="/" className="text-blue-500 text-3xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        WatchList
      </Link>
    </div>
  );
}

export default NavBar;

/*

We use <Link> in place of <a> tag to save from rerendaring our page while navigating this helps in better performance of the website


function NavBar() {
    return (
      <div className="flex space-x-8 items-center pl-3 py-4">
        <img className="w-[50px]" src={Logo} />
        <a href="/" className="text-blue-500 text-3xl font-bold">
          Movies
        </a>
        <a href="/watchlist" className="text-blue-500 text-3xl font-bold">
          WatchList
        </a>
      </div>
    );
  }
  
  export default NavBar;

*/

/*
./MovieLogo.png -> means to search in parent folder of NavBar i.e component. But MovieLogo.png is not in component folder. so we go one more step up i.e ../MovieLogo.png in the src folder 

<img className="w-[50px]" src={Logo} /> // giving css using tailwind syntax for width w-[size px]

a href="/">Movies</a>  || <a href="/watchlist">WatchList</a> || => these are use to navigate to "/" and '/watchlist' respectively

<div className="flex"> is use for aligning horizontally

<div className="flex space-x-8 item-center"> this give 8 space in x axis , and the item inside the div will be in center
<div className="flex space-x-8 items-center pl-3 py-4"> => this gives margin and padding

<a href="/watchlist" className="text-blue-500 text-3xl font-bold"> 
- text-blue-500 : make text blue in color
- text-3xl : make the text 3px size
- font-bold: make fonts bolder
*/
