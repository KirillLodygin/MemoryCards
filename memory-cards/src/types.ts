import {actions} from './app/redux/actions/gameFieldActions';
import {RouterState} from 'connected-react-router';

//store
export interface IGameFieldState {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	pair: { card: string, index: number }[]
}

export interface IAppState {
	router: RouterState,
	gameField: IGameFieldState
}

// Actions

/*
interface ICreateCardsSetAction {
	type: typeof UPDATE_CARD_SET,
	payload: { card: string, isFlip: boolean, isWin: boolean }[]
}

interface IUpdateGameStoryAction {
	type: typeof UPDATE_GAME_STORY,
	payload: {
		cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
		pair:{ card: string, index: number }[]
	}
}

interface IPrepareNextRoundAction {
	type: typeof PREPARE_NEXT_ROUND,
	payload: {
		cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
		pair: []
	}
}

export type GameActionsType = ICreateCardsSetAction | IUpdateGameStoryAction | IPrepareNextRoundAction;

 */

type PropertiesTypes<T> = T extends {[key: string]: (...args: any) => infer U} ? U :never;
export type ActionsTypes = PropertiesTypes<typeof actions>;


//View
export type SelectionBoxProps = {
	createCardsSet: typeof actions.createCardsSet,
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
};

export type SelectionElProps = {
	name: string,
	fieldSize: 6 | 10 | 15,
	createCardSet: typeof actions.createCardsSet
};

export type GameFieldProps = {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	pair:{ card: string, index: number }[],
	updateGameStory: typeof actions.updateGameStory,
	prepareNextRound: typeof actions.prepareNextRound
};

export type MemoryCardBlockProps = {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	cardsAmount: number,
	card: string,
	isFlip: boolean,
	isWin: boolean,
	index: number,
	pair: { card: string, index: number }[],
	updateGameStory: typeof actions.updateGameStory
}