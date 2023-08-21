import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Showcase/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>My Button</Button>
);

export const Primary = Template.bind({});
Primary.storyName = "Primary 'solid'";
Primary.args = {
  variant: 'solid',
  disabled: false,
  onClick: () => {
    console.log('clicked');
  },
};

export const Secondary = Template.bind({});
Secondary.storyName = "Secondary 'outline'";
Secondary.args = {
  variant: 'outline',
  disabled: false,
  onClick: () => {
    console.log('clicked');
  },
};

export const Tertiary = Template.bind({});
Tertiary.storyName = "Tertiary 'ghost'";
Tertiary.args = {
  variant: 'ghost',
  disabled: false,
  onClick: () => {
    console.log('clicked');
  },
};

export const Text = Template.bind({});
Text.storyName = "Text 'link'";
Text.args = {
  variant: 'link',
  disabled: false,
  onClick: () => {
    console.log('clicked');
  },
};
