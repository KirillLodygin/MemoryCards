import {IGameFieldState, ActionsTypes, } from '../../../types';

const initialState: IGameFieldState = {
	cardsSet: [],
	pair: []
};

export const gameField = (state = initialState, action: ActionsTypes): IGameFieldState => {
	switch (action.type) {
		case 'UPDATE_CARD_SET':
			return {...state, cardsSet: action.payload};

		case 'UPDATE_PAIR_ARR':
			return {...state, pair: action.payload};

		case 'CLEAR_GAME_FIELD':
			return {...state, cardsSet: action.payload.cardsSet, pair: action.payload.pair};

		default:
			return state;
	}
};