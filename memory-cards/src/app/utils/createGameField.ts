const shuffle = (arr: Array<string>): Array<string> => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const pickCards = (index: 6 | 10 | 15): Array<string> => {
  const cards = [
    'A',
    'H',
    'd',
    'f',
    'g',
    'h',
    'i',
    'l',
    'o',
    'e',
    's',
    'v',
    'x',
    'y',
    'z',
  ];
  const gameCards: Array<string> = [];

  while (gameCards.length < index) {
    const i = Math.floor(Math.random() * 15);
    if (gameCards.indexOf(cards[i]) === -1) gameCards.push(cards[i]);
  }

  return shuffle(gameCards.concat(gameCards));
};
