import React from 'react';
import {Provider} from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { IMainProps } from './types';
import RoutesContainer from './Routes';


export const App: React.FC<IMainProps> = ({store, history}) => {
	return(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<RoutesContainer/>
				</Switch>
			</ConnectedRouter>
		</Provider>
	)
};