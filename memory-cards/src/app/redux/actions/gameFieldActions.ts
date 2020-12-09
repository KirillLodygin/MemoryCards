import {
	UPDATE_CARD_SET,
	UPDATE_GAME_STORY,
	PREPARE_NEXT_ROUND
} from '../reducers/gameField';

import {pickCards} from '../../utils/createGameField';
import {cardSetUpdate} from '../../utils/cardSetUpdate';
import {nextRound} from '../../utils/nextRound';

export const createCardSet = (version: 6 | 10 | 15) => {
	return {
		type: UPDATE_CARD_SET,
		payload: pickCards(version)
	}
};

export const updateGameStory = (
	cardsSet: { card: string, flip: boolean, win: boolean }[],
	pair:{ card: string, index: number }[],
	cell: { card: string, index: number }) => {
	return {
		type: UPDATE_GAME_STORY,
		payload: cardSetUpdate(cardsSet, pair, cell)
	}
};

export const prepareNextRound = (
	cardsSet: { card: string, flip: boolean, win: boolean }[],
	pair:{ card: string, index: number }[]) => {
	return {
		type: PREPARE_NEXT_ROUND,
		payload: {
			cardsSet: nextRound(cardsSet, pair),
			pair: []
		}
	}
};