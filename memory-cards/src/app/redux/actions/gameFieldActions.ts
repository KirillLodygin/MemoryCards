import {pickCards} from '../../utils/createGameField';
import {nextRound} from '../../utils/nextRound';
import {updateGameStory} from "../../utils/updateGameStory";

export const actions = {
	createCardsSet: (version: 6 | 10 | 15) => (
		{
			type: 'UPDATE_CARD_SET',
			payload: pickCards(version)
		} as const
	),

	updateGameStory: (
		cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
		index: number
		) => (
		{
			type: 'UPDATE_GAME_STORY',
			payload: updateGameStory(cardsSet, index)
		} as const
	),

	prepareNextRound: (
		cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
		pair:{ card: string, index: number }[]) => (
		{
			type: 'PREPARE_NEXT_ROUND',
			payload: nextRound(cardsSet)
		} as const
	)
};