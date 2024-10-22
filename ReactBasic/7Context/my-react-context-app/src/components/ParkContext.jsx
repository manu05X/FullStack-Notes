//import { createContext } from "react";
import React from "react";

// Create the Park Context
// export const ParkContext = createContext();
export const ParkContext = React.createContext();

// Create a Provider component
export const ParkProvider = ({ children }) => {
  const parkInfo = {
    parkName: "Imagica Amusement park",

    rollerCoaster: "Must be taller than 48 inches",
    waterSlide: "You must know how to Swim",
    merryGoRound: "Children must age less than 10",

    ticketForRollerCoaster: () => {
      return "RollerCoaster Started";
    },

    ticketForWaterSlide: () => {
      return "WaterSlide Started";
    },

    ticketForMerryGoRound: () => {
      return "Merry go Round Started";
    },
  };

  return (
    <ParkContext.Provider value={parkInfo}>{children}</ParkContext.Provider>
  );
};
