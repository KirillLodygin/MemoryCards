import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { GameField, GameFieldProps } from '../app/view/Game/GameField';
import * as MemoryCardBlockStories from './MemoryCardBlock.stories';

export default {
	title: 'Game/GameField',
	component: GameField,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<GameFieldProps> = args => <GameField {...args} />;

export const SmallField = Template.bind({});
SmallField.args = {
	cardsSet: [
		{card: 'A', flip: false, win: false},
		{card: 'A', flip: false, win: false},
		{card: 'H', flip: false, win: false},
		{card: 'H', flip: false, win: false},
		{card: 'd', flip: false, win: false},
		{card: 'd', flip: false, win: false},
		{card: 'e', flip: false, win: false},
		{card: 'e', flip: false, win: false},
		{card: 'f', flip: false, win: false},
		{card: 'f', flip: false, win: false},
		{card: 'g', flip: false, win: false},
		{card: 'g', flip: false, win: false}
	],
	...MemoryCardBlockStories.CardOnField.args
};

export const MediumField = Template.bind({});
MediumField.args = {
	cardsSet: [
		{card: 'A', flip: false, win: false},
		{card: 'A', flip: false, win: false},
		{card: 'H', flip: false, win: false},
		{card: 'H', flip: false, win: false},
		{card: 'd', flip: false, win: false},
		{card: 'd', flip: false, win: false},
		{card: 'e', flip: false, win: false},
		{card: 'e', flip: false, win: false},
		{card: 'f', flip: false, win: false},
		{card: 'f', flip: false, win: false},
		{card: 'g', flip: false, win: false},
		{card: 'g', flip: false, win: false},
		{card: 'h', flip: false, win: false},
		{card: 'h', flip: false, win: false},
		{card: 'i', flip: false, win: false},
		{card: 'i', flip: false, win: false},
		{card: 'l', flip: false, win: false},
		{card: 'l', flip: false, win: false},
		{card: 'o', flip: false, win: false},
		{card: 'o', flip: false, win: false}
	],
	...MemoryCardBlockStories.CardOnField.args
};

export const LargeField = Template.bind({});
LargeField.args = {
	cardsSet: [
		{card: 'A', flip: false, win: false},
		{card: 'A', flip: false, win: false},
		{card: 'H', flip: false, win: false},
		{card: 'H', flip: false, win: false},
		{card: 'd', flip: false, win: false},
		{card: 'd', flip: false, win: false},
		{card: 'e', flip: false, win: false},
		{card: 'e', flip: false, win: false},
		{card: 'f', flip: false, win: false},
		{card: 'f', flip: false, win: false},
		{card: 'g', flip: false, win: false},
		{card: 'g', flip: false, win: false},
		{card: 'h', flip: false, win: false},
		{card: 'h', flip: false, win: false},
		{card: 'i', flip: false, win: false},
		{card: 'i', flip: false, win: false},
		{card: 'l', flip: false, win: false},
		{card: 'l', flip: false, win: false},
		{card: 'o', flip: false, win: false},
		{card: 'o', flip: false, win: false},
		{card: 's', flip: false, win: false},
		{card: 's', flip: false, win: false},
		{card: 'v', flip: false, win: false},
		{card: 'v', flip: false, win: false},
		{card: 'x', flip: false, win: false},
		{card: 'x', flip: false, win: false},
		{card: 'y', flip: false, win: false},
		{card: 'y', flip: false, win: false},
		{card: 'z', flip: false, win: false},
		{card: 'z', flip: false, win: false}
	],
	...MemoryCardBlockStories.CardOnField.args
};