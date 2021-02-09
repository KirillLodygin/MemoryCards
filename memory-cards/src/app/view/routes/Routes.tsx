import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IAppState, IGameFieldState, IDispatchPropsType} from '../../../types';
import { actions } from '../../redux/actions/gameFieldActions';

import {GameField} from '../Game/GameField';
import {SelectionBox} from '../SelectionBox/SelectionBox';
import {EndOfTheGame} from '../End/EndOfTheGame';

const {createCardsSet, updatePairArr, clearPairArr, increaseCounter} = actions;

const Routes: React.FC<IGameFieldState & IDispatchPropsType> = ({
																	cardsSet,
																	pair,
																	counter,
																	createCardsSet,
																	updatePairArr,
																	clearPairArr,
																	increaseCounter
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
					counter={counter}
					updatePairArr={updatePairArr}
					clearPairArr={clearPairArr}
					increaseCounter={increaseCounter}
				/>}
			/>

			<Route path='/end_of_the_game' render={() => <EndOfTheGame/>}/>
		</Switch>
	);
};

const mapStateToProps = ({ gameField }: IAppState) => ({
	cardsSet: gameField.cardsSet,
	pair: gameField.pair,
	counter: gameField.counter
});

export default connect(mapStateToProps,
	{
		createCardsSet,
		updatePairArr,
		clearPairArr,
		increaseCounter
	})(Routes);