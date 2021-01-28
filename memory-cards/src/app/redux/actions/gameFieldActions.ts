//import {GameActionsType} from '../../../types';

import {pickCards} from '../../utils/createGameField';
import {cardSetUpdate} from '../../utils/cardSetUpdate';
import {nextRound} from '../../utils/nextRound';

/*
export const createCardsSet = (version: 6 | 10 | 15): GameActionsType => {
	return {
		type: UPDATE_CARD_SET,
		payload: pickCards(version)
	}
};

export const updateGameStory = (
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	pair:{ card: string, index: number }[],
	cell: { card: string, index: number }): GameActionsType => {
	return {
		type: UPDATE_GAME_STORY,
		payload: cardSetUpdate(cardsSet, pair, cell)
	}
};

export const prepareNextRound = (
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	pair:{ card: string, index: number }[]): GameActionsType => {
	return {
		type: PREPARE_NEXT_ROUND,
		payload: {
			cardsSet: nextRound(cardsSet, pair),
			pair: []
		}
	}
};

 */

export const actions = {
	createCardsSet: (version: 6 | 10 | 15) => (
		{
			type: 'UPDATE_CARD_SET',
			payload: pickCards(version)
		} as const
	),

	updateGameStory: (
		cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
		pair:{ card: string, index: number }[],
		cell: { card: string, index: number }) => (
		{
			type: 'UPDATE_GAME_STORY',
			payload: cardSetUpdate(cardsSet, pair, cell)
		} as const
	),

	prepareNextRound: (
		cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
		pair:{ card: string, index: number }[]) => (
		{
			type: 'PREPARE_NEXT_ROUND',
			payload: nextRound(cardsSet, pair)
		} as const
	)
};