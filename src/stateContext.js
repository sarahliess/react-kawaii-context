import { useState, createContext } from 'react';
//import data to provide throughout app
import { colors, moods } from './data';

export const StateContext = createContext({});

//create StateContextProvider as wrapper for our app inside index. We always need the value attribute to contain our states and define them through useState. Without {children}, we won't see out app because it refers to the child of StateContextProvider inside of our index.js (which is app.js)
const StateContextProvider = ({ children }) => {
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	const [selectedMood, setSelectedMood] = useState(moods[0]);

	return (
		<StateContext.Provider
			value={{
				selectedColor,
				setSelectedColor,
				selectedMood,
				setSelectedMood,
				colors,
				moods
			}}>
			{children}
		</StateContext.Provider>
	);
};

export default StateContextProvider;
