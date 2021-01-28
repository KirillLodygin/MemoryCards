import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {actions} from './app/redux/actions/gameFieldActions';
import {AppStateType} from './types';
import {GameField} from './app/view/Game/GameField';
import {SelectionBox} from './app/view/SelectionBox/SelectionBox';

const {createCardsSet, updateGameStory, prepareNextRound} = actions;

type MapPropsType = ReturnType<typeof mapStateToProps>;
interface DispatchPropsType {
	createCardsSet: typeof actions.createCardsSet,
	updateGameStory: typeof actions.updateGameStory,
	prepareNextRound: typeof actions.prepareNextRound
}

class App extends Component<MapPropsType & DispatchPropsType> {
	render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
		const {cardsSet, pair, createCardsSet, updateGameStory, prepareNextRound} = this.props;

		return (
			<Switch>
				<Route path='/' render={() =>
					<SelectionBox
						cardsSet={cardsSet}
						createCardsSet={createCardsSet}
					/>}
				/>

				<Route path='/game_field' render={() =>
					<GameField
						cardsSet={cardsSet}
						pair={pair}
						updateGameStory={updateGameStory}
						prepareNextRound={prepareNextRound}
					/>}
				/>
			</Switch>
		);
	}
}

const mapStateToProps = (state: AppStateType) => ({
	cardsSet: state.gameField.cardsSet,
	pair: state.gameField.pair
});


export default compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps,
		{
			createCardsSet,
			updateGameStory,
			prepareNextRound
		}))(App)