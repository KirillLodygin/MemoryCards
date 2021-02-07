import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IAppState, IGameFieldState, IDispatchPropsType} from '../../../types';
import { actions } from '../../redux/actions/gameFieldActions';

import {GameField} from '../Game/GameField';
import {SelectionBox} from '../SelectionBox/SelectionBox';

const {createCardsSet, updateGameStory, prepareNextRound} = actions;

const Routes: React.FC<IGameFieldState & IDispatchPropsType> = ({
																	cardsSet,
																	pair,
																	createCardsSet,
																	updateGameStory,
																	prepareNextRound
																}) => {
	return (
		<Switch>
			<Route exact path='/' render={() =>
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

export default connect(mapStateToProps,
	{
		createCardsSet,
		updateGameStory,
		prepareNextRound
	})(Routes);