import React, { useEffect } from 'react';
import {GameFieldProps} from '../../../types';
import {MemoryCardBlock} from './MemoryCardBlock';
import {Redirect} from "react-router";

import '../../../index.sass';

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

export const GameField: React.FC<GameFieldProps> = ({
														cardsSet,
														pair = [],
														updateGameStory,
														prepareNextRound
													}) => {
	console.log(cardsSet);
	useEffect(() => {
		if (pair.length === 2) setTimeout(prepareNextRound, 1000, cardsSet, pair);
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