import { actions } from './app/redux/actions/gameFieldActions';
import { RouterState } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';

//store
export interface IGameFieldState {
	cardsSet: Array<string>,
	pair: Array<string>
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
	updatePairArr: typeof actions.updatePairArr,
	clearGameField: typeof actions.clearGameField
}


// Actions
type PropertiesTypes<T> = T extends {[key: string]: (...args: any) => infer U} ? U :never;
export type ActionsTypes = PropertiesTypes<typeof actions>;


//View
export type SelectionBoxProps = {
	cardsSet: Array<string>,
	createCardsSet: typeof actions.createCardsSet
};

export type SelectionElProps = {
	name: string,
	fieldSize: 6 | 10 | 15,
	createCardSet: typeof actions.createCardsSet
};

export type GameFieldProps = {
	cardsSet: Array<string>,
	pair: Array<string>,
	updatePairArr: typeof actions.updatePairArr
}

export type MemoryCardBlockProps = {
	card: string,
	cardSetSize: number,
	pair: Array<string>,
	updatePairArr: typeof actions.updatePairArr
}

export type EndOfTheGameProps = {
	clearGameField: typeof actions.clearGameField
}