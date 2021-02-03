import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import {IAppState, SelectionBoxProps, IDispatchSelectionBoxPropsType} from '../../../types';
import {SelectionEl} from './SelectionEl';

import {actions} from '../../redux/actions/gameFieldActions';


const {createCardsSet} = actions;

const initialArr: { num: 6 | 10 | 15, name: string }[] = [
	{num: 6, name: 'Размер поля 4 х 3'},
	{num: 10, name: 'Размер поля 5 х 4'},
	{num: 15, name: 'Размер поля 6 х 5'}
];

export const SelectionBox: React.FC<SelectionBoxProps  & IDispatchSelectionBoxPropsType> = ({
															  cardsSet,
															  createCardsSet
}) => {
	return (
		(cardsSet.length === 0) ?
		<div className="selection-box">
			<h1>Выберите размер игрового поля</h1>
			{initialArr.map((item, i) => {
				return <SelectionEl key = {i} name={item.name} fieldSize={item.num} createCardSet={createCardsSet}/>
			})}
		</div> :
			<Redirect to='/game_field'/>
	);
};

const mapStateToProps = ({ gameField }: IAppState) => ({
	cardsSet: gameField.cardsSet
});

export default connect(mapStateToProps,
		{
			createCardsSet,
		})(SelectionBox);

