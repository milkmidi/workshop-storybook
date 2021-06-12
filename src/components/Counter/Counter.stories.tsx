import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import Counter from '.';
import type { CounterProps } from '.';

const action = actions('onChange');

export default {
  title: 'Counter',
  component: Counter,
  argTypes: {
    // foo is the property we want to remove from the UI
    onChagne: {
      table: {
        disable: true,
      },
    },
    list: {
      options: ['React', 'Vue', 'Angular'],
      type: 'select',
    },
  },
} as Meta;

const Template:Story<CounterProps> = (args:Partial<CounterProps>) => (
  <div>
    <Counter
      {...args}
      {...action}
    />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};

export const DefaultCount = Template.bind({});
DefaultCount.args = {
  defaultCount: 10,
};
