export const nextRound = (
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	pair: { card: string, index: number }[]
):  {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	pair: { card: string, index: number }[]
} => {
	pair.forEach((item) => {
		(pair[0].card === pair[1].card) ? cardsSet[item.index].isWin = true : cardsSet[item.index].isFlip = false;
	});

	pair = [];

	return {
		cardsSet,
		pair
	};
};