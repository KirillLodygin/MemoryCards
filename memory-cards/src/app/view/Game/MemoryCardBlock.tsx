import React from 'react';
import '../../../index.sass';

export interface MemoryCardBlockProps {
	cardsAmount: number,
	card: string,
	flip: boolean,
	win: boolean,
	index: number,
	pair: { card: string, index: number }[],
	onClick: () => void
}

export const MemoryCardBlock: React.FC<MemoryCardBlockProps> = ({
																	cardsAmount,
																	card,
																	flip = false,
																	win = false,
																	index = 1,
																	pair = [],
																	onClick
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
		if (flip || pair.length === 2) {
			e.preventDefault();
		} else {
			onClick();
		}
	};

	const math = (pair.length === 2) ? pair[0].card === pair[1].card : false;

	return (
		<div
			className={['memory-card', (flip) ? 'flip' : 'hover', (win) ? 'opacity' : '', cardModel(cardsAmount)].join(' ')}
			onClick={onClickAction}
		>
			{(win) ?
				<div className='no-back-face'/> :
				<div className='back-face'/>
			}
			<div className={['front-face', (math) ? 'math' : 'no_math'].join(' ')}>{card}</div>
		</div>
	);
};