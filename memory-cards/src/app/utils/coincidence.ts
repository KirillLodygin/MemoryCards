export const coincidence = (cardsSet: { card: string, isFlip: boolean, isWin: boolean }[]): boolean => {
	let pair = cardsSet.filter((item) => {
		return item.isFlip = true
	});

	if(pair.length < 2 || pair.length > 2){
		return false
	} else {
		return (pair[0].card === pair[1].card);
	}
};