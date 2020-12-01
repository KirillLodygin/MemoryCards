import React, {ReactElement} from 'react';
//import {connect} from 'react-redux';\

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

export interface GameFieldProps {
	cardsSet: { card: string, flip: boolean, win: boolean }[],
	pair: { card: string, index: number }[],
	onClick: () => void
}

export const GameField: React.FC<GameFieldProps> = ({
														cardsSet,
														pair,
														onClick
													}) => {

	const cards: Array<ReactElement<any, any>> = cardsSet.map((card, index) => {
		return <MemoryCardBlock
			key={index}
			card={card.card}
			flip={card.flip}
			win={card.win}
			index={index}
			pair={pair}
			cardsAmount={cardsSet.length}
			onClick={onClick}
		/>
	});

	return (
		<section
			className={['game-field', fieldModel(cardsSet.length)].join(' ')}
		>
			{cards}
		</section>
	)
};


/*
const mapStateToProps = (store) => {
	return {

	};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GameField);

 */