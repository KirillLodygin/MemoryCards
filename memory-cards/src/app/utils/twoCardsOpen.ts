export const twoCardsOpen = (cardsSet: { card: string, isFlip: boolean, isWin: boolean }[]): boolean => {
	let counter = 0;
	cardsSet.forEach((item) => {if (item.isFlip) counter++});
	return (counter%2 === 0);
};