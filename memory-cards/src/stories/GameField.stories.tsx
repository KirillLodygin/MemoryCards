import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { GameField, GameFieldProps } from '../app/view/Game/GameField';
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
	...MemoryCardBlockStories.CardOnField.args
};

export const MediumField = Template.bind({});
MediumField.args = {
	cardsSet:pickCards(10),
	...MemoryCardBlockStories.CardOnField.args
};

export const LargeField = Template.bind({});
LargeField.args = {
	cardsSet: pickCards(15),
	...MemoryCardBlockStories.CardOnField.args
};

export const CreatedSmallField = Template.bind({});
CreatedSmallField.args = {
	cardsSet: pickCards(6, true),
	...MemoryCardBlockStories.CardOnField.args
};

export const CreatedMediumField = Template.bind({});
CreatedMediumField.args = {
	cardsSet: pickCards(10, true),
	...MemoryCardBlockStories.CardOnField.args
};

export const CreatedLargeField = Template.bind({});
CreatedLargeField.args = {
	cardsSet: pickCards(15, true),
	...MemoryCardBlockStories.CardOnField.args
};