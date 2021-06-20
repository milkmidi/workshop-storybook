// import * as React from 'react';
import { css } from '@emotion/css';
import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import TodoForm from '.';
import type { TodoFormProps } from '.';

const action = actions('onSubmit');

export default {
  title: 'TodoList/TodoForm',
  component: TodoForm,
  parameters: { controls: { sort: 'requiredFirst' } },
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
  },
} as Meta;

const Template:Story<TodoFormProps> = (args:Partial<TodoFormProps>) => {
  return (
    <div className={css``}>
      <TodoForm
        {...args}
        {...action}
      />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  value: 'hi, 9527',
};
