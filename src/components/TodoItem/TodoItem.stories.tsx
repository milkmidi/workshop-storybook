// import * as React from 'react';
import { css } from '@emotion/css';
import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import TodoItem from '.';
import type { TodoItemProps } from '.';

const action = actions('onToggleTodo');

export default {
  title: 'TodoList/TodoItem',
  component: TodoItem,
  parameters: { controls: { sort: 'requiredFirst' } },
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
  },
} as Meta;

const Template:Story<TodoItemProps> = (args:Partial<TodoItemProps>) => {
  return (
    <div className={css``}>
      <TodoItem
        id="fakeId"
        text="TodoItem"
        done={false}
        {...args}
        {...action}
      />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Done = Template.bind({});
Done.args = {
  done: true,
};
