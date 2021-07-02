import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from './app/redux/configureStore';
import './index.sass';
import { App } from './App';

const history = createBrowserHistory();
const initialState: any = {};

const store = configureStore(history, initialState);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root'),
);
