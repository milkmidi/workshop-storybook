// import * as React from 'react';
import { css } from '@emotion/css';
import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import TodoList from '.';
import type { TodoListProps } from '.';

const action = actions();

export default {
  title: 'TodoList/TodoList',
  component: TodoList,
  parameters: { controls: { sort: 'requiredFirst' } },
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta;

const Template:Story<TodoListProps> = (args:Partial<TodoListProps>) => {
  return (
    <div className={css`
      max-width: 640px;
      padding: 32px 40px;
      background-color: white;
    `}
    >
      <TodoList
        {...args}
        {...action}
      />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithData = Template.bind({});
WithData.args = {
  todoData: [
    {
      id: 'fakeId',
      done: false,
      text: 'React',
    },
    {
      id: 'fakeId2',
      done: true,
      text: 'Javascript',
    },
  ],
};
