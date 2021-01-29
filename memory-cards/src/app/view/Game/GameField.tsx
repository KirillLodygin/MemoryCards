import React, {useEffect} from 'react';
import {GameFieldProps} from '../../../types';

import '../../../index.sass';

import {MemoryCardBlock} from './MemoryCardBlock';

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
														pair,
														updateGameStory,
														prepareNextRound
													}) => {

	useEffect(() => {
		if (pair.length === 2) setTimeout(prepareNextRound, 600, cardsSet, pair);
	});

	return (
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