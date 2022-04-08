import { Mug } from 'react-kawaii';
import { useContext } from 'react';
import { StateContext } from '../../stateContext';

function MugContainer() {
	const { selectedColor, selectedMood } = useContext(StateContext);
	console.log(selectedColor);
	return (
		<div className="mug-container">
			{' '}
			<Mug
				className="mug"
				size={150}
				mood={selectedMood}
				color={selectedColor}
			/>
		</div>
	);
}
export default MugContainer;
