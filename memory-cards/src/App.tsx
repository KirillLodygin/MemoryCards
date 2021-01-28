import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {IAppState, IDispatchPropsType, IGameFieldState} from './types';

import {actions} from './app/redux/actions/gameFieldActions';

import {GameField} from './app/view/Game/GameField';
import {SelectionBox} from './app/view/SelectionBox/SelectionBox';

const {createCardsSet, updateGameStory, prepareNextRound} = actions;

export const App:React.FC<IGameFieldState & IDispatchPropsType> = ({
																	   cardsSet,
																	   pair,
																	   createCardsSet,
																	   updateGameStory,
																	   prepareNextRound
}) => {
	return (
		<Switch>
			<Route path='/' render={() =>
				<SelectionBox
					cardsSet={cardsSet}
					createCardsSet={createCardsSet}
				/>}
			/>

			<Route path='/game_field' render={() =>
				<GameField
					cardsSet={cardsSet}
					pair={pair}
					updateGameStory={updateGameStory}
					prepareNextRound={prepareNextRound}
				/>}
			/>
		</Switch>
	);
};

const mapStateToProps = ({ gameField }: IAppState) => ({
	cardsSet: gameField.cardsSet,
	pair: gameField.pair
});

export default compose<React.ComponentType>(
	connect(mapStateToProps,
		{
			createCardsSet,
			updateGameStory,
			prepareNextRound
		}))(App)