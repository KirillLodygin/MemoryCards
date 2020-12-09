import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {GameField} from './app/view/Game/GameField';
import {SelectionBox} from './app/view/SelectionBox/SelectionBox';

export default const App:React.FC<> = () => {
	return (
		<Switch>
			<Route path='/' component={SelectionBox}/>
			<Route path='./game_field' component={GameField}/>
		</Switch>
	)
};