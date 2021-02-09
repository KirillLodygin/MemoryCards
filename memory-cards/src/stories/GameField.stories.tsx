import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { GameField } from '../app/view/Game/GameField';
import {GameFieldProps} from '../types';
import * as MemoryCardBlockStories from './MemoryCardBlock.stories';

import {pickCards} from '../app/utils/createGameField';

export default {
	title: 'Game/Game Field',
	component: GameField,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<GameFieldProps> = args => <GameField {...args} />;

export const SmallField = Template.bind({});
SmallField.args = {
	cardsSet: pickCards(6),
	pair: [],
	...MemoryCardBlockStories.CardOnField.args
};

export const MediumField = Template.bind({});
MediumField.args = {
	cardsSet:pickCards(10),
	pair: [],
	...MemoryCardBlockStories.CardOnField.args
};

export const LargeField = Template.bind({});
LargeField.args = {
	cardsSet: pickCards(15),
	pair: [],
	...MemoryCardBlockStories.CardOnField.args
};