export const cardModel = (x: number) => {
	switch (x) {
		case 12:
			return 's-card';

		case 20:
			return 'm-card';

		case 30:
			return 'l-card';

		default:
			return 'test-card'
	}
};