export const UPDATE_CARD_SET = 'UPDATE_CARD_SET';
export const UPDATE_GAME_STORY = 'UPDATE_GAME_STORY';
export const PREPARE_NEXT_ROUND = 'PREPARE_NEXT_ROUND';

const initialState = {
	cardsSet: [],
	pair: []
};

export const gameField = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CARD_SET:
			return {...state, cardsSet: action.payload};

		case UPDATE_GAME_STORY:
			return {...state, state: action.payload};

		case PREPARE_NEXT_ROUND:
			return {...state, cardsSet: action.payload.cardsSet, pair: action.payload.pair};

		default:
			return state;
	}
};