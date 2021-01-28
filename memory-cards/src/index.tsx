import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './app/redux/configureStore';
import './index.sass';
import AppContainer from './App';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
	<BrowserRouter>
		<Provider store={configureStore()}>
			<ConnectedRouter history={history}>
				<AppContainer />
			</ConnectedRouter>
		</Provider>
	</BrowserRouter>
	,
	document.getElementById('root')
);
