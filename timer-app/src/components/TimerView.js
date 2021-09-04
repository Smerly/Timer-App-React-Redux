import React from 'react';
import { useDispatch } from 'react-redux';
import '../TimerView.css';
import { formatTime } from '../utils';

import { toggleTimer } from '../actions';
export default function TimerView(props) {
	const { index, timer } = props;
	const dispatch = useDispatch();
	return (
		<div className="TimerView">
			<h2>{timer.name}</h2>
			<h1> {formatTime(timer.time)}</h1>
			<button onClick={() => dispatch(toggleTimer(index))}>
				{timer.isRunning ? 'Stop' : 'Start'}
			</button>
		</div>
	);
}
