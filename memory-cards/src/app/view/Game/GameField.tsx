import React, { Component } from 'react';
import {GameFieldProps, IAppState, IDispatchGameFieldPropsType} from '../../../types';

import '../../../index.sass';

import {MemoryCardBlock} from './MemoryCardBlock';

import {actions} from '../../redux/actions/gameFieldActions';
import {connect} from 'react-redux';
import {Redirect} from "react-router";

const {updateGameStory, prepareNextRound} = actions;

const fieldModel = (x: number) => {
	switch (x) {
		case 12:
			return 'small';

		case 20:
			return 'medium';

		default:
			return 'large'
	}
};

type AllProps = GameFieldProps & IDispatchGameFieldPropsType;

 export class GameField extends Component<AllProps, IAppState>{
 	componentDidMount(): void {
		if(this.props.pair.length === 2) setTimeout(this.props.prepareNextRound, 350, this.props.cardsSet, this.props.pair);
		const {cardsSet} = this.props;
		console.log(cardsSet);
	}

	render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

		return (
			(this.props.cardsSet.length === 0) ?

				<Redirect to='/'/> :

				<section
					className={['game-field', fieldModel(this.props.cardsSet.length)].join(' ')}
				>
					{this.props.cardsSet.map((card, index) => {
						return <MemoryCardBlock
							key={index}
							cardsSet={this.props.cardsSet}
							card={card.card}
							isFlip={card.isFlip}
							isWin={card.isWin}
							index={index}
							pair={this.props.pair}
							cardsAmount={this.props.cardsSet.length}
							updateGameStory={this.props.updateGameStory}
						/>
					})}
				</section>
		);
	}
}

/*
const GameField: React.FC<IGameFieldState & IDispatchGameFieldPropsType> = ({
														cardsSet,
														pair = [],
														updateGameStory,
														prepareNextRound
													}) => {

	useEffect(() => {
		if (pair.length === 2) setTimeout(prepareNextRound, 350, cardsSet, pair);
	});

	return (
		(cardsSet.length === 0) ?
			<Redirect to='/'/> :

			<section
				className={['game-field', fieldModel(cardsSet.length)].join(' ')}
			>
				{cardsSet.map((card, index) => {
					return <MemoryCardBlock
						key={index}
						cardsSet={cardsSet}
						card={card.card}
						isFlip={card.isFlip}
						isWin={card.isWin}
						index={index}
						pair={pair}
						cardsAmount={cardsSet.length}
						updateGameStory={updateGameStory}
					/>
				})}
			</section>
	)
};

 */

const mapStateToProps = ({ gameField }: IAppState) => ({
	cardsSet: gameField.cardsSet,
	pair: gameField.pair
});

export default connect(mapStateToProps,
		{
			updateGameStory,
			prepareNextRound
		})(GameField)