const shuffle = (arr: Array<string>): Array<string> => {
	for (let i = arr.length - 1; i > 0 ; i--){
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

export const pickCards = (index: 6 | 10 | 15, test: boolean = false): { card: string, flip: boolean, win: boolean }[] => {
	let cards = ['A', 'H', 'd', 'f', 'g', 'h', 'i', 'l', 'o', 'e', 's', 'v', 'x', 'y', 'z'];
	let gameCards: Array<string> = [];

	while (gameCards.length < index) {
		let i = Math.floor(Math.random() * 14);
		if (gameCards.indexOf(cards[i]) === -1) gameCards.push(cards[i]);
	}

	return shuffle(gameCards.concat(gameCards)).map((item: string) => {
		return (test) ? {card: item, flip: true, win: false} : {card: item, flip: false, win: false}
	});
};