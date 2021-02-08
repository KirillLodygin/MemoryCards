import { actions } from './app/redux/actions/gameFieldActions';
import { RouterState } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';

//store
export interface IGameFieldState {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[]
}

export interface IAppState {
	router: RouterState,
	gameField: IGameFieldState
}

export interface IMainProps {
	store: Store<IAppState>,
	history: History
}

export interface IDispatchPropsType {
	createCardsSet: typeof actions.createCardsSet,
	updateGameStory: typeof actions.updateGameStory,
	prepareNextRound: typeof actions.prepareNextRound
}


// Actions
type PropertiesTypes<T> = T extends {[key: string]: (...args: any) => infer U} ? U :never;
export type ActionsTypes = PropertiesTypes<typeof actions>;


//View
export type SelectionBoxProps = {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	createCardsSet: typeof actions.createCardsSet
};

export type SelectionElProps = {
	name: string,
	fieldSize: 6 | 10 | 15,
	createCardSet: typeof actions.createCardsSet
};

export type GameFieldProps = {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	updateGameStory: typeof actions.updateGameStory,
	prepareNextRound: typeof actions.prepareNextRound
}

export type MemoryCardBlockProps = {
	cardsSet: { card: string, isFlip: boolean, isWin: boolean }[],
	card: string,
	isFlip: boolean,
	isWin: boolean,
	index: number,
	updateGameStory: typeof actions.updateGameStory
}