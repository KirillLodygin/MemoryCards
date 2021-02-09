import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IAppState, IGameFieldState, IDispatchPropsType} from '../../../types';
import { actions } from '../../redux/actions/gameFieldActions';

import {GameField} from '../Game/GameField';
import {SelectionBox} from '../SelectionBox/SelectionBox';
import {EndOfTheGame} from '../End/EndOfTheGame';

const {createCardsSet, updatePairArr, clearPairArr, clearGameField} = actions;

const Routes: React.FC<IGameFieldState & IDispatchPropsType> = ({
																	cardsSet,
																	pair,
																	createCardsSet,
																	updatePairArr,
																	clearPairArr,
																	clearGameField
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
					updatePairArr={updatePairArr}
					clearPairArr={clearPairArr}
				/>}
			/>

			<Route path='/end_of_the_game' render={() =>
				<EndOfTheGame
					clearGameField={clearGameField}
				/>}/>
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
		updatePairArr,
		clearPairArr,
		clearGameField
	})(Routes);