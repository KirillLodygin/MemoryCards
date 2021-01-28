import { Store, createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {History} from 'history';
import {routerMiddleware} from 'connected-react-router';
import logger from 'redux-logger';
import rootReducer from './reducers';

import {IAppState} from '../../types';

export default function configureStore(
	history: History,
	initialState: IAppState
): Store<IAppState> {
	const store = createStore(
		rootReducer(history),
		initialState,
		composeWithDevTools(
			applyMiddleware(logger, routerMiddleware(history))
		)
	);
	return store;
}


/*
const store = createStore(
	createrootReducer(history),
	composeWithDevTools(
		applyMiddleware(logger, save({ namespace: 'game-field' }))
	),
);

// @ts-ignore
window.__store__ = store;

export default store;

 */