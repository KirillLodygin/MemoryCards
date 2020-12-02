import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {MemoryCardBlock, MemoryCardBlockProps} from '../app/view/Game/MemoryCardBlock';

export default {
	title: 'Game/MemoryCardBlock',
	component: MemoryCardBlock,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<MemoryCardBlockProps> = (args) => <MemoryCardBlock {...args} />;

export const TestCard = Template.bind({});
TestCard.args = {
	cardsAmount: 1,
	card: 'f',
	index: 1
};

export const WinCard = Template.bind({});
WinCard.args = {
	cardsAmount: 1,
	card: 'g',
	flip: true,
	index: 0,
	pair: [
		{
			card: 'g',
			index: 0
		},
		{
			card: 'g',
			index: 3
		}
	]
};

export const CardOnField = Template.bind({});
CardOnField.args = {};