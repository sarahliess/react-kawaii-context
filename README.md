A simple project using context

1. CONTEXT-FILE

- Create context-file for all the states (or separate in different files for bigger applications)
- import useContext from react
- import data
- create export const StateContext = createContext({});
- use useState to define states & setter
- create StateContextProvider
- add value attribute and assign states & setter functions

2. INDEX.JS

- import StateContextProvider
- wrap App in StateContextProvider

3. USE YOUR STATES

- inside of the components that need state, import :
  import { useContext } from "react";
  import { StateContext } from "../../stateContext";
- instead of useState, use:
  const { selectedColor, selectedMood } = useContext(StateContext);
  with the state & setters your component needs
