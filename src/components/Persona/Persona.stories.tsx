import type { Meta, StoryObj } from '@storybook/react';

import { Persona } from './Persona';

const meta = {
  component: Persona,
  tags: ['autodocs'],
} satisfies Meta<typeof Persona>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {
  args: {
    text: 'Иван Иванов',
    tooltip: 'Подсказка',
    onClick: undefined,
  },
};

export const Interactive: Story = {
  args: {
    text: 'Иван Иванов',
    tooltip: 'Подсказка',
    onClick: () => {},
  },
};
