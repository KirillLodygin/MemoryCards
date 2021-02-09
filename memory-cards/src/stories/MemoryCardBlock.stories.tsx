import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {MemoryCardBlock} from '../app/view/Game/MemoryCardBlock';
import {MemoryCardBlockProps} from '../types';

export default {
	title: 'Game/Memory Card Block',
	component: MemoryCardBlock,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<MemoryCardBlockProps> = (args) => <MemoryCardBlock {...args} />;

export const CardOnField = Template.bind({});
CardOnField.args = {};