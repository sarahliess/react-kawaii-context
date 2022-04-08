import { useContext } from 'react';
import { StateContext } from '../stateContext';

function Random() {
	const { setSelectedColor, setSelectedMood, moods, colors } = useContext(
		StateContext
	);

	const chooseRandom = () => {
		let randomColor = colors[Math.floor(Math.random() * colors.length)];
		let randomMood = moods[Math.floor(Math.random() * moods.length)];
		setSelectedMood(randomMood);
		setSelectedColor(randomColor);
	};

	return (
		<div className="random">
			<p>feeling adventurous?</p>
			<button onClick={chooseRandom}>shuffle!</button>
		</div>
	);
}
export default Random;
