export const updateGameStory = (
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	index: number
): { card: string, isFlip: boolean, isWin: boolean }[] => {
	cardsSet[index].isFlip = true;
	return cardsSet;
};