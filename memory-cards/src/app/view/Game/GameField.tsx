import React from 'react';
import { GameFieldProps } from '../../../types';
import { MemoryCardBlock } from './MemoryCardBlock';
import { Redirect } from "react-router";

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
														pair,
														counter,
														updatePairArr,
														clearPairArr,
														increaseCounter
													}) => {
	if (pair.length === 2) {
		if (pair[0] === pair[1]) {
			counter += 1;
			increaseCounter(counter);
		}

		setTimeout(clearPairArr, 1100, []);
	}

	return (
		(cardsSet.length === 0) ?
			<Redirect to='/'/> :

			(cardsSet.length === counter * 2) ?
				<Redirect to='/end_of_the_game'/> :

				<section
					className={['game-field', fieldModel(cardsSet.length)].join(' ')}
				>
					{
						cardsSet.map((card, index) => {
							return <MemoryCardBlock
								key={index}
								card={card}
								cardSetSize={cardsSet.length}
								pair={pair}
								updatePairArr={updatePairArr}
							/>
						})
					}
				</section>
	)
};