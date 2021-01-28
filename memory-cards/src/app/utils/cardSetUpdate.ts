export const cardSetUpdate = (
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	pair: { card: string, index: number }[],
	cell: { card: string, index: number }
): {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	pair: { card: string, index: number }[]
} => {
	cardsSet[cell.index].isFlip = true;
	pair.push(cell);
	return {
		cardsSet,
		pair
	}
};