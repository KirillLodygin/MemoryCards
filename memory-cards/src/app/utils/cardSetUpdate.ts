export const cardSetUpdate = (
	cardsSet: { card: string, flip: boolean, win: boolean }[],
	pair: { card: string, index: number }[],
	cell: { card: string, index: number }
) => {
	cardsSet[cell.index].flip = true;
	pair.push(cell);
	return {
		cardsSet,
		pair
	}
};