import type { Meta, StoryFn } from '@storybook/react';

import { Chips } from './Chips';
import { useState } from 'react';

const meta = {
  component: Chips,
  tags: ['autodocs'],
} satisfies Meta<typeof Chips>;

export default meta;

const Template: StoryFn<typeof Chips> = (args) => {
  const [values, setValues] = useState(args.values);
  return <Chips {...args} values={values} onChange={setValues} />;
};

export const Base = Template.bind({});
Base.args = {
  values: ['first', 'second', 'red'],
  placeholder: 'Введите значение',
  canBeDeleted: () => true,
};

export const WithPermanentChips = Template.bind({});
WithPermanentChips.args = {
  values: ['first', 'red', 'second'],
  placeholder: 'Введите значение',
  canBeDeleted: (value) => !['first', 'second'].includes(value),
};
