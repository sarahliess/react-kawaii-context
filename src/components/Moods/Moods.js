import { useContext } from 'react';
import Mood from './Mood';
import { StateContext } from '../../stateContext';

function Moods() {
	const { moods } = useContext(StateContext);
	return (
		<>
			<div className="mood-top">
				<h2>pick a mood</h2>
			</div>
			<div className="moods-container">
				{moods && moods.map((mood) => <Mood key={mood} mood={mood} />)}
			</div>
		</>
	);
}
export default Moods;
