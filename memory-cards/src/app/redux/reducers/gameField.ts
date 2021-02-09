import {IGameFieldState, ActionsTypes, } from '../../../types';

const initialState: IGameFieldState = {
	cardsSet: [],
	pair: [],
	counter: 0
};

export const gameField = (state = initialState, action: ActionsTypes): IGameFieldState => {
	switch (action.type) {
		case 'UPDATE_CARD_SET':
			return {...state, cardsSet: action.payload};

		case 'UPDATE_PAIR_ARR':
			return {...state, pair: action.payload};

		case 'CLEAR_PAIR_ARR':
			return {...state, pair: action.payload};

		case 'INCREASE_COUNTER':
			return {...state, counter: action.payload};

		default:
			return state;
	}
};