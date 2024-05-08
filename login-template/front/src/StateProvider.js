import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();//basically create context ka provider 
//create context ka all drama 

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
