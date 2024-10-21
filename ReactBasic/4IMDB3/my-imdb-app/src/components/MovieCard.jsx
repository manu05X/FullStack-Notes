/*
For posterPath we are not receving full url from data i.e we are only receiving a part of data (posterPath =>) "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg" so
we need to add the starting path in the url => https://image.tmdb.org/t/p/original/+ posterPath

*/

function MovieCard({
  name,
  posterUrl,
  movieObject,
  handleAddtoWatchListProps,
}) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterUrl})`,
      }}
    >
      {/* heart eye emoji
       onClick={handleAddtoWatchListProps(movieObject)} ->  if we donot use ()=> the this will run till all the data is added. So we use function so it is triggered or calle donly whent imoji is clicked
       onClick={() => handleAddtoWatchListProps(movieObject)}
       */}
      <div
        onClick={() => handleAddtoWatchListProps(movieObject)}
        className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
      >
        &#128525;
      </div>
      <div
        style={{ color: "#FFFFFF" }}
        className="text-white w-full text-center text-xl p-2 bg-gray-gray-900/500"
      >
        {name}
      </div>
    </div>
  );
}

export default MovieCard;

/*
function MovieCard() {
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300"
      style={{
        backgroundImage:
          "url(https://m.media-amazon.com/images/I/71uoicxpqoS._AC_UF1000,1000_QL80_.jpg)",
      }}
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-gray-900/500">
        Titanic
      </div>
    </div>
  );
}

export default MovieCard;
*/

/*
style={{ color: "#f4d03f" }} : this we are providing inline style to our card name

h-[40vh]: Sets the height of the div to 40% of the viewport height (vh). This means that the height will adjust based on the size of the user's browser window.
w-[200px]: Sets the width of the div to a fixed width of 200 pixels.
bg-cover: Ensures that the background image covers the entire area of the div, maintaining its aspect ratio and cropping if necessary.
flex: Applies Flexbox layout to the div, allowing for flexible positioning of child elements.
items-end: Aligns flex items (children of this div) to the end (bottom) of the flex container.
rounded-lg: Applies large rounded corners to the div, giving it a softer appearance.
hover:scale-90: This class applies a scaling transformation when the user hovers over the div, reducing its size to 90% of its original size. This creates a visual effect that can enhance user interaction.
duration-300: Specifies that any transition effects (like scaling) should take 300 milliseconds. For smooth effect



Inline Styles
The style attribute allows for inline CSS styles. Here, it is used to set a background image:
    backgroundImage: Specifies the URL of an image that will be used as the background for this div. The URL provided points to an image hosted on Amazon's media server.

/*

bg-cover : it will try to fit in the hole image in tthe hight and width given by us 


<div className="text-white w-full text-center text-xl p-2 bg-gray-gray-900/500">
        Titanic
      </div>

text-white: This class sets the text color to white.
w-full: This class makes the width of the div 100% of its parent container.
text-center: This class centers the text horizontally within the div.
text-xl: This class applies a larger font size to the text, typically defined in the CSS framework.
p-2: This class adds padding of a specific size (usually defined in the framework) around all sides of the div.
bg-gray-gray-900/500:
This class sets the background color. However, there seems to be a typo here; it should likely be bg-gray-900/50, where:
    bg-gray-900: Refers to a specific shade of gray (very dark).
    /500: In some frameworks, this indicates opacity (50% opacity).

*/
//https://m.media-amazon.com/images/I/71uoicxpqoS._AC_UF1000,1000_QL80_.jpg
