import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StateContextProvider from './stateContext';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<StateContextProvider>
			<App />
		</StateContextProvider>
	</StrictMode>
);
