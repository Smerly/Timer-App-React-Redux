import './App.css';

// Redux Imports

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import reducers from './reducers';
import throttle from 'lodash/throttle';

// Components

import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';
import { update } from './actions';
import { saveState, loadState } from './utils';

const persistedState = loadState();
const store = createStore(reducers);
store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}, 1000)
);

let lastUpdateTime = Date.now();
setInterval(() => {
	const now = Date.now();
	const deltaTime = now - lastUpdateTime;
	lastUpdateTime = now;
	store.dispatch(update(deltaTime));
}, 50);

// let lastUpdateTime = Date.now()
// setInterval(() => {
//   const now = Date.now()
//   const deltaTime = now - lastUpdateTime
//   lastUpdateTime = now
//   store.dispatch(update(deltaTime))
// }, 50)

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>TMRZ</h1>
				<NewTimer />
				<ListTimers />
			</div>
		</Provider>
	);
}

export default App;
