import './styles.css';
import MugContainer from './components/Mug/MugContainer';
import Colors from './components/Colors/Colors';
import Moods from './components/Moods/Moods';
import Random from './components/Random';

export default function App() {
	return (
		<div className="App">
			{' '}
			<h1>Kawaii playground</h1>
			<div className="app-inner">
				<MugContainer />
				<div className="component-wrapper">
					<Colors />
					<Moods />
					<Random />
				</div>
			</div>
		</div>
	);
}
