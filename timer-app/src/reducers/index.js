import { combineReducers } from 'redux';
import timerReducer from './TimersReducer';
import selectedTimerReducer from './selectedTimerReducer';
export default combineReducers({
	timers: timerReducer,
	selectedTimer: selectedTimerReducer,
});
