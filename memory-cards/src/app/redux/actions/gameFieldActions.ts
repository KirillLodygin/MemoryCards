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

	clearPairArr: (
		pair: Array<string>
	) => (
		{
			type: 'CLEAR_PAIR_ARR',
			payload: pair
		} as const
	),

	increaseCounter: (
		counter: number
	) => (
		{
			type: 'INCREASE_COUNTER',
			payload: counter
		} as const
	)
};