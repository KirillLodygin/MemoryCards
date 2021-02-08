import {coincidence} from './coincidence';

export const nextRound = (
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[]
): { card: string, isFlip: boolean, isWin: boolean }[] => {
	(coincidence(cardsSet)) ?
		cardsSet.forEach((item) => {
			if(item.isFlip) item.isWin = true;
		}) :
		cardsSet.forEach((item) => {
			if(item.isFlip) item.isFlip = false;
		});
	return cardsSet
};