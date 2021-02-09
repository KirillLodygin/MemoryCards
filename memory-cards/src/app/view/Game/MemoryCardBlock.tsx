import React, { useState, useEffect } from 'react';
import { MemoryCardBlockProps } from '../../../types'
import { cardModel } from "../../utils/cardModel";

export const MemoryCardBlock: React.FC<MemoryCardBlockProps> = ({
																	card,
																	cardSetSize,
																	pair,
																	updatePairArr
																}) => {
	console.log('!!!');
	const [isFlip, setIsFlip] = useState(false);
	const [isMath, setIsMath] = useState(false);
	const [isWin, setIsWin] = useState(false);

	useEffect(() => {
		if(pair.length === 2 && pair[0] === pair[1] && pair[0] === card) {
			setIsMath(true);
			setTimeout(setIsWin, 800, true);
		}

		if(pair.length === 2 && pair[0] !== pair[1]) {
			setTimeout(setIsFlip, 800, false);
		}
	}, [pair, card]);

	const onClickAction = (e: React.MouseEvent) => {
		if (isFlip || pair.length === 2) {
			e.preventDefault();
		} else {
			setIsFlip(true);
			updatePairArr(pair.concat([card]));
		}
	};

	return (
		<div
			className={['memory-card', (isFlip) ? 'flip' : 'hover', (isWin) ? 'opacity' : '', cardModel(cardSetSize)].join(' ')}
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