import "./App.css";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import Parent3 from "./components/Parent3";
import ParkContext from "./components/ParkContext";

function App() {
  // const parkInfo = {
  //   parkName: "Imagica Amusement park",

  //   rollerCoaster: "Must be taller than 48 inches",
  //   waterSlide: "You must know how to Swim",
  //   merryGoRound: "Children must age less than 10",

  //   ticketForRollerCoaster: () => {
  //     return "RollerCoaster Started";
  //   },

  //   ticketforWaterSlide: () => {
  //     return "WaterSlide Started";
  //   },

  //   ticketForMerryGoRound: () => {
  //     return "Merry go Round Started";
  //   },
  // };

  return (
    <>
      <ParkContext.ParkProvider>
        {/* <Parent1 parkInfo={parkInfo} />
        <Parent2 parkInfo={parkInfo} />
        <Parent3 parkInfo={parkInfo} /> */}
        <Parent1 />
        <Parent2 />
        <Parent3 />
      </ParkContext.ParkProvider>
    </>
  );
}

export default App;

/*

Explanation of Prop Drilling in This Example:
  App -> Parent1 -> Child1: Prop drilling occurs because App defines the parkInfo object and passes it down through Parent1. Parent1 then passes specific data (ticketForWaterSlide function) to Child1.
  Why is this considered prop drilling? If there were more levels between App and Child1, you'd have to pass the parkInfo through each intermediate level, even if those components don’t need the data.

Challenges with Prop Drilling:
  Increased Complexity: As the component tree grows, prop drilling can lead to more complex and harder-to-maintain code, especially when many layers of components are involved.
  Redundant Props: Intermediate components (like Parent1, Parent2, etc.) may have to receive and forward props that they don’t actually use, which can make the code cluttered.

Alternatives to Prop Drilling:
  Context API: Instead of passing props through every component, you can use React's Context API to share data globally with components that need it.
  State Management Libraries (e.g., Redux, MobX): These libraries can be used to manage global state and avoid deep prop drilling, making data accessible from any component without manually passing props through many levels.

In summary, in your code, prop drilling occurs where the parkInfo object is passed from the App component to child components (Child1, Child3, etc.) via intermediary Parent components, even when some of these components don’t necessarily need all of the data.



Solution to above problem : 

Step-by-Step Solution with Context:
  Create a Context for Park Info We'll use React's createContext to create a ParkContext and a ParkProvider to wrap the components that need access to parkInfo.

  Provide Context to the Component Tree Instead of passing parkInfo as props from the App component, we'll use the ParkProvider to share parkInfo with any component in the tree.

  Consume Context in Child Components Any component that needs parkInfo can use the useContext hook to access it directly.
*/
