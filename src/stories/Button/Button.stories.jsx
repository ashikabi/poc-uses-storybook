import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { jsxDecorator } from "storybook-addon-jsx"

import { Button } from '.';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withDesign, jsxDecorator],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  rounded: true,
  label: 'Button 1',
};
//https://storybook.js.org/addons/storybook-addon-designs
Primary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  },
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button 2',
  rounded: false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  rounded: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  rounded: false,
};
