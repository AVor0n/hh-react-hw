import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: 'label',
    onDelete: undefined,
  },
};

export const Deletable: Story = {
  args: {
    label: 'deletable',
    onDelete: () => {},
  },
};
