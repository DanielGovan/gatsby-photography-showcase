import React from 'react';

import {
  Text as ChakraText,
  type TextProps,
  forwardRef,
  List,
  ListProps,
} from '@chakra-ui/react';

const Text = forwardRef<TextProps, 'div'>(({ children, ...rest }, ref) => {
  return (
    <ChakraText ref={ref} {...rest}>
      {children}
    </ChakraText>
  );
});

Text.displayName = 'Text';

export const textStyles = {
  intro: {
    fontSize: ['1.5rem', '1.7rem'],
    lineHeight: ['1.3', '1.5'],
    fontWeight: 700,
    letterSpacing: '0',
    color: '#ddd',
  },
  body: {
    fontSize: ['1.5rem', '1.7rem'],
    lineHeight: ['1.3', '1.5'],
    fontWeight: 400,
    letterSpacing: '0',
    color: '#ddd',
  },
  nav: {
    lineHeight: 1.2,
    fontWeight: 400,
    letterSpacing: '0.1px',
    color: '#ddd',
  },
  logo: {
    fontSize: '2rem',
    lineHeight: '1.7rem',
    letterSpacing: '3px',
    fontWeight: 300,
    color: '#ddd',
  },
  subText: {
    fontSize: '1rem',
    lineHeight: '1',
    letterSpacing: '3px',
    fontWeight: 300,
    color: '#aaa',
    position: 'relative',
    bottom: '-3px',
  },
};

export const IntroText = forwardRef<TextProps, 'div'>(({ children, ...rest }, ref) => (
  <Text ref={ref} textStyle="intro" {...rest}>
    {children}
  </Text>
));
IntroText.displayName = 'IntroText';

export const BodyText = forwardRef<TextProps, 'div'>(({ children, ...rest }, ref) => (
  <Text ref={ref} textStyle="body" {...rest}>
    {children}
  </Text>
));

BodyText.displayName = 'BodyText';

export const CopyList = forwardRef<ListProps, 'ul'>(({ children, ...rest }, ref) => (
  <List ref={ref} textStyle="body" listStyleType="disc" pl="1.5rem" {...rest}>
    {children}
  </List>
));

CopyList.displayName = 'CopyList';

export const NavText = forwardRef<TextProps, 'div'>(({ children, ...rest }, ref) => (
  <Text ref={ref} textStyle="nav" {...rest}>
    {children}
  </Text>
));
NavText.displayName = 'NavText';

export const LogoText = forwardRef<TextProps, 'div'>(({ children, ...rest }, ref) => (
  <Text ref={ref} textStyle="logo" {...rest}>
    {children}
  </Text>
));
LogoText.displayName = 'LogoText';

export const SubText = forwardRef<TextProps, 'div'>(({ children, ...rest }, ref) => (
  <Text ref={ref} textStyle="subText" {...rest}>
    {children}
  </Text>
));
SubText.displayName = 'SubText';
