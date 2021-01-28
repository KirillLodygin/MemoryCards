import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import {IMainProps} from './types'
import RoutesContainer from './Routes';

export const App: React.FC<IMainProps> = ({store, history}) => {
	return(
		<Router>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<RoutesContainer />
				</ConnectedRouter>
			</Provider>
		</Router>
	)
};