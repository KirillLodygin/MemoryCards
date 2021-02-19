import React, { useState, useEffect } from 'react';
import { GameFieldProps } from '../../../types';
import { MemoryCardBlock } from './MemoryCardBlock';
import { Redirect } from 'react-router';

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
														updatePairArr
													}) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if(pair.length === 2) {
			if(pair[0] === pair[1]){
				setTimeout(setCounter, 1000,counter + 1);
			}
			setTimeout(updatePairArr, 1100, []);
		}

	}, [pair]); // eslint-disable-line

	return (
		(cardsSet.length === 0) ?
			<Redirect to='/'/> :

			(cardsSet.length !== counter * 2) ?
				(<section
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
				</section>) :
				<Redirect to='/end_of_the_game'/>
	)
};