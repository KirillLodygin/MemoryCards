import React, {useEffect} from 'react';
import {IAppState, IDispatchGameFieldPropsType, IGameFieldState} from '../../../types';

import '../../../index.sass';

import {MemoryCardBlock} from './MemoryCardBlock';

import {actions} from '../../redux/actions/gameFieldActions';
import {connect} from 'react-redux';
import {Redirect} from "react-router";

const {updateGameStory, prepareNextRound} = actions;

const fieldModel = (x: number) => {
	switch (x) {
		case 12:
			return 'small';

		case 20:
			return 'medium';

		default:
			return 'large'
	}
};

export const GameField: React.FC<IGameFieldState & IDispatchGameFieldPropsType> = ({
														cardsSet,
														pair = [],
														updateGameStory,
														prepareNextRound
													}) => {
	useEffect(() => {
		if (pair.length === 2) setTimeout(prepareNextRound, 650, cardsSet, pair);
	});

	return (
		(cardsSet.length === 0) ?
			<Redirect to='/'/> :

			<section
				className={['game-field', fieldModel(cardsSet.length)].join(' ')}
			>
				{cardsSet.map((card, index) => {
					return <MemoryCardBlock
						key={index}
						cardsSet={cardsSet}
						card={card.card}
						isFlip={card.isFlip}
						isWin={card.isWin}
						index={index}
						pair={pair}
						cardsAmount={cardsSet.length}
						updateGameStory={updateGameStory}
					/>
				})}
			</section>
	)
};

const mapStateToProps = ({ gameField }: IAppState) => ({
	cardsSet: gameField.cardsSet,
	pair: gameField.pair
});

export default connect(mapStateToProps,
		{
			updateGameStory,
			prepareNextRound
		})(GameField)