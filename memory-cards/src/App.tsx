import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import { IMainProps } from './types';
import RoutesContainer from './app/view/routes/Routes';


export const App: React.FC<IMainProps> = ({store, history}) => {
	return(
		<BrowserRouter>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<RoutesContainer/>
				</ConnectedRouter>
			</Provider>
		</BrowserRouter>

	)
};