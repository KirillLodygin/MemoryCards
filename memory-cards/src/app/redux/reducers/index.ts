import {combineReducers} from 'redux';
import {History} from 'history';
import {connectRouter} from 'connected-react-router';
import {gameField} from "./gameField";

export const createRootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		gameField: gameField
	});