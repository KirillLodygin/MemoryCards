import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import configureStore from './app/redux/configureStore';
import './index.sass';
import AppContainer from './App';
import {BrowserRouter} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";

const history = createBrowserHistory();
const initialState: any = {};

const store = configureStore(history, initialState);


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<AppContainer />
			</ConnectedRouter>
		</Provider>
	</BrowserRouter>
	,
	document.getElementById('root')
);
