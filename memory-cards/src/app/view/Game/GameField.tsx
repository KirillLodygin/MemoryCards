import React, {ReactElement, useEffect} from 'react';
import {GameFieldProps, MemoryCardBlockProps} from '../../../types';
import {MemoryCardBlock} from './MemoryCardBlock';
import {Redirect} from "react-router";
import {twoCardsOpen} from '../../utils/twoCardsOpen';

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
														updateGameStory,
														prepareNextRound
													}) => {
	useEffect(() => {
		if(twoCardsOpen(cardsSet)) setTimeout(prepareNextRound, 1000, cardsSet);
	});

	const cards: ReactElement<MemoryCardBlockProps>[] = cardsSet.map((card, index) => {
		return <MemoryCardBlock
			key={index}
			cardsSet={cardsSet}
			card={card.card}
			isFlip={card.isFlip}
			isWin={card.isWin}
			index={index}
			updateGameStory={updateGameStory}
		/>
	});

	return (
		(cardsSet.length === 0) ?
			<Redirect to='/'/> :

			<section
				className={['game-field', fieldModel(cardsSet.length)].join(' ')}
			>
				{cards}
			</section>
	)
};