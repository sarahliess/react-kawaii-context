import { Planet } from 'react-kawaii';
import { useContext } from 'react';
import { StateContext } from '../../stateContext';

function Mood({ mood }) {
	const { selectedMood, setSelectedMood } = useContext(StateContext);

	const chooseMood = () => {
		setSelectedMood(mood);
	};

	return (
		//chooseMood on div because React Kawaii limits the props of the predefined components, in this case "Planet"
		<div>
			<div className="mood-container" onClick={chooseMood}>
				<Planet color="#F5F08E" mood={mood} size={70} />
			</div>{' '}
			<p className="tick-mood">{selectedMood === mood ? '✔' : ''}</p>
		</div>
	);
}

export default Mood;
