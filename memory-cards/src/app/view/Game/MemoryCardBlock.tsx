import React from 'react';
import {MemoryCardBlockProps} from '../../../types'


export const MemoryCardBlock: React.FC<MemoryCardBlockProps> = React.memo(({
																			   cardsSet,
																			   cardsAmount,
																			   card,
																			   isFlip = false,
																			   isWin = false,
																			   index,
																			   pair = [],
																			   updateGameStory
																		   }) => {
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
		console.log('Card clicked!');
		if (isFlip || pair.length === 2) {
			e.preventDefault();
		} else {
			updateGameStory(cardsSet, pair, {card, index});
		}
	};

	const isMath = (pair.length === 2) ? pair[0].card === pair[1].card : false;

	return (
		<div
			className={['memory-card', (isFlip) ? 'flip' : 'hover', (isWin) ? 'opacity' : '', cardModel(cardsAmount)].join(' ')}
			onClick={onClickAction}
		>
			{(isWin) ?
				<div className='no-back-face'/> :
				<div className='back-face'/>
			}
			<div className={['front-face', (isMath) ? 'math' : 'no_match'].join(' ')}>{card}</div>
		</div>
	);
});