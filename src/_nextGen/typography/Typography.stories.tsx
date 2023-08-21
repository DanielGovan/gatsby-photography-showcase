import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { CopyStack } from '../layout/CopyStack';

import { BodyText, IntroText, LogoText, NavText } from './Text';
import { HeroHeader, BodyHeader, SubHeader } from './Heading';

export default {
  title: 'Showcase/Typography',
  component: HeroHeader,
} as ComponentMeta<typeof HeroHeader>;

const Template: ComponentStory<typeof HeroHeader> = args => (
  <CopyStack>
    <HeroHeader>Hero heading</HeroHeader>

    <BodyHeader>Page header lorem ipsum dolor sit amet.</BodyHeader>

    <SubHeader>Subheader lorem ipsum dolor sit amet.</SubHeader>

    <NavText>Nav item - Nav item</NavText>
    <LogoText>Photography feature</LogoText>
    <IntroText>
      Intro copy ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quae!
    </IntroText>

    <BodyText>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo id quas eligendi
      aperiam autem, numquam neque facilis odio, quisquam voluptas possimus aut
      repellendus tempore, asperiores pariatur itaque illo voluptatibus nihil?
    </BodyText>
  </CopyStack>
);

export const Default = Template.bind({});
Default.storyName = 'Typography';
