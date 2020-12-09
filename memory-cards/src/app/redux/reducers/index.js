import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {gameField} from "./gameField";


export default history => {
	combineReducers({
		router: connectRouter(history),
		gameField: gameField
	})
}