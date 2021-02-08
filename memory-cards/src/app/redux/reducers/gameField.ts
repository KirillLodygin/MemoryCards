import {IGameFieldState, ActionsTypes, } from '../../../types';

const initialState: IGameFieldState = {
	cardsSet: []
};

export const gameField = (state = initialState, action: ActionsTypes): IGameFieldState => {
	switch (action.type) {
		case 'UPDATE_CARD_SET':
			return {...state, cardsSet: action.payload};

		case 'UPDATE_GAME_STORY':
			return {...state, cardsSet: action.payload};

		case 'PREPARE_NEXT_ROUND':
			return {...state, cardsSet: action.payload};

		default:
			return state;
	}
};