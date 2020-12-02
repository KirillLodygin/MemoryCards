import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { GameField, GameFieldProps } from '../app/view/Game/GameField';
import * as MemoryCardBlockStories from './MemoryCardBlock.stories';

import {createTestField, createGameField} from '../app/utils/createGameField';

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
	cardsSet: createGameField([
		'A', 'H', 'd', 'f', 'g', 'h'
	]),
	...MemoryCardBlockStories.CardOnField.args
};

export const MediumField = Template.bind({});
MediumField.args = {
	cardsSet: createGameField([
		'A', 'H', 'd', 'f', 'g', 'h', 'i', 'l', 'o', 'e'
	]),
	...MemoryCardBlockStories.CardOnField.args
};

export const LargeField = Template.bind({});
LargeField.args = {
	cardsSet: createGameField([
		'A', 'H', 'd', 'f', 'g', 'h', 'i', 'l', 'o', 'e', 's', 'v', 'x', 'y', 'z'
	]),
	...MemoryCardBlockStories.CardOnField.args
};

export const CreatedSmallField = Template.bind({});
CreatedSmallField.args = {
	cardsSet: createTestField([
		'A', 'H', 'd', 'f', 'g', 'h'
	]),
	...MemoryCardBlockStories.CardOnField.args
};

export const CreatedMediumField = Template.bind({});
CreatedMediumField.args = {
	cardsSet: createTestField([
		'A', 'H', 'd', 'f', 'g', 'h', 'i', 'l', 'o', 'e'
	]),
	...MemoryCardBlockStories.CardOnField.args
};

export const CreatedLargeField = Template.bind({});
CreatedLargeField.args = {
	cardsSet: createTestField([
		'A', 'H', 'd', 'f', 'g', 'h', 'i', 'l', 'o', 'e', 's', 'v', 'x', 'y', 'z'
	]),
	...MemoryCardBlockStories.CardOnField.args
};