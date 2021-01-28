import React from 'react';
import { Redirect } from 'react-router'
import {SelectionBoxProps} from '../../../types';
import {SelectionEl} from './SelectionEl';

const initialArr: { num: 6 | 10 | 15, name: string }[] = [
	{num: 6, name: 'Размер поля 4 х 3'},
	{num: 10, name: 'Размер поля 5 х 4'},
	{num: 15, name: 'Размер поля 6 х 5'}
];

export const SelectionBox: React.FC<SelectionBoxProps> = ({cardsSet, createCardsSet}) => {
	console.log('!!!');

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

