import { useContext } from 'react';
import { StateContext } from '../../stateContext';
import Color from './Color';

function Colors() {
	const { colors } = useContext(StateContext);
	console.log(colors);
	return (
		<>
			<div className="color-top">
				<h2>pick a color</h2>
			</div>
			<div className="colors-container">
				{colors && colors.map((color) => <Color key={color} color={color} />)}
			</div>
		</>
	);
}

export default Colors;
