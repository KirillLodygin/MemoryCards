import {pickCards} from '../../utils/createGameField';

export const actions = {
	createCardsSet: (version: 6 | 10 | 15) => (
		{
			type: 'UPDATE_CARD_SET',
			payload: pickCards(version)
		} as const
	),

	updatePairArr: (
		pair: Array<string>
		) => (
		{
			type: 'UPDATE_PAIR_ARR',
			payload: pair
		} as const
	),


	clearGameField: (
		cardsSet: Array<string>,
		pair: Array<string>
	) => (
		{
			type: 'CLEAR_GAME_FIELD',
			payload: {
				cardsSet,
				pair
			}
		} as const
	)
};