import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { InlineLink } from './Link';

export default {
  title: 'Showcase/InlineLink',
  component: InlineLink,
} as ComponentMeta<typeof InlineLink>;

const Template: ComponentStory<typeof InlineLink> = args => (
  <>
    <InlineLink external={true} target="http://google.com" title="HoverMe" relme={false}>
      External test
    </InlineLink>
    <br />
    <br />
    <InlineLink external={false} target="http://google.com" title="HoverMe" relme={false}>
      Internal test
    </InlineLink>
  </>
);

export const Default = Template.bind({});
Default.storyName = 'InlineLink';
Default.args = {
  //   external?: boolean; // if so it's a link
  //   target: string; // url or equiv
  //   title?: string; // mouseover
  //   relme?: boolean; // linking to my own accounts
};
