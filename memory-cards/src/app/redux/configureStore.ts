import { Store, createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {History} from 'history';
import {routerMiddleware} from 'connected-react-router';
import logger from 'redux-logger';
import {createRootReducer} from './reducers';

import {IAppState} from '../../types';

export default function configureStore(
	history: History,
	initialState: IAppState
): Store<IAppState> {
	return createStore(
		createRootReducer(history),
		initialState,
		composeWithDevTools(
			applyMiddleware(logger, routerMiddleware(history))
		)
	);
}