// import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import Cta from '.';
import type { CtaProps } from '.';

const action = actions();

export default {
  title: 'Cta',
  component: Cta,
  parameters: { controls: { sort: 'requiredFirst' } },
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta;

const Template:Story<CtaProps> = (args:Partial<CtaProps>) => {
  return (
    <div>
      <Cta
        aria-label="button"
        {...args}
        {...action}
      >
        CTA
      </Cta>
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const VariantInfo = Template.bind({});
VariantInfo.args = {
  variant: 'info',
};
