import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import {IMainProps} from './types'
import SelectionBoxContainer from "./app/view/SelectionBox/SelectionBox";
import GameFieldContainer from "./app/view/Game/GameField";

export const App: React.FC<IMainProps> = ({store, history}) => {
	return(
		<Router>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Switch>
						<Route exact path='/' component={SelectionBoxContainer}/>

						<Route path='/game_field' component={GameFieldContainer}/>
					</Switch>
				</ConnectedRouter>
			</Provider>
		</Router>
	)
};