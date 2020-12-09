export const nextRound = (
	cardsSet: { card: string, flip: boolean, win: boolean }[],
	pair: { card: string, index: number }[]
) => {
	pair.forEach((item) => {
		(pair[0].card === pair[1].card) ? cardsSet[item.index].win = true : cardsSet[item.index].flip = false;
	});

	return cardsSet;
};