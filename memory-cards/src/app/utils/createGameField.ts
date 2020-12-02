const shuffle = (arr: Array<string>): Array<string> => {
	arr = arr.concat(arr);

	for (let i = arr.length - 1; i > 0 ; i--){
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

export const createGameField = (arr: Array<string>): { card: string, flip: boolean, win: boolean }[] => {
	return shuffle(arr).map((item: string) => {
		return {
			card: item,
			flip: false,
			win: false
		};
	});
};

export const createTestField = (arr: Array<string>): { card: string, flip: boolean, win: boolean }[] => {
	return shuffle(arr).map((item: string) => {
		return {
			card: item,
			flip: true,
			win: false
		};
	});
};