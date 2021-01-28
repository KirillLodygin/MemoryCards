import {combineReducers} from 'redux';
import {History} from 'history';
import {connectRouter} from 'connected-react-router';
import {gameField} from "./gameField";

export default (history: History) =>
	combineReducers({
		router: connectRouter(history),
		gameField: gameField
	});