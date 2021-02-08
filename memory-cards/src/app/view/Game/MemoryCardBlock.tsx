import React from 'react';
import {MemoryCardBlockProps} from '../../../types'
import {twoCardsOpen} from '../../utils/twoCardsOpen';
import {coincidence} from '../../utils/coincidence';


export const MemoryCardBlock: React.FC<MemoryCardBlockProps> = ({
																	cardsSet,
																	card,
																	isFlip = false,
																	isWin = false,
																	index,
																	updateGameStory
																}) => {
	console.log('!!!');

	const cardModel = (x: number) => {
		switch (x) {
			case 12:
				return 's-card';

			case 20:
				return 'm-card';

			case 30:
				return 'l-card';

			default:
				return 'test-card'
		}
	};

	const onClickAction = (e: React.MouseEvent) => {
		if (isFlip || twoCardsOpen(cardsSet)) {
			e.preventDefault();
		} else {
			updateGameStory(cardsSet, index);
		}
	};

	const isMath = coincidence(cardsSet);

	return (
		<div
			className={['memory-card', (isFlip) ? 'flip' : 'hover', (isWin) ? 'opacity' : '', cardModel(cardsSet.length)].join(' ')}
			onClick={onClickAction}
		>
			{(isWin) ?
				<div className='no-back-face'/> :
				<div className='back-face'/>
			}
			<div className={['front-face', (isMath) ? 'math' : 'no_match'].join(' ')}>{card}</div>
		</div>
	);
};