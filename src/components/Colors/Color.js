import { useContext } from 'react';
import { StateContext } from '../../stateContext';

function Color({ color }) {
	const { setSelectedColor, selectedColor } = useContext(StateContext);

	const chooseColor = () => {
		setSelectedColor(color);
	};

	return (
		<div
			onClick={chooseColor}
			className="color-container"
			style={{ backgroundColor: color }}>
			{selectedColor === color ? <p>✔</p> : ''}
		</div>
	);
	//one tile template
}

export default Color;
