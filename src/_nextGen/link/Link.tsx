import React, { ReactElement } from 'react';
import { Link as ChakraLink, forwardRef, ListItem, keyframes } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import type { LinkProps } from '@chakra-ui/react';

import { SubText } from '../typography';
import { TapWrap } from '../animations';
import { Box } from '../primitives';

interface AppLinkProps extends LinkProps {
  children?: React.ReactNode; // text?
  active?: boolean; // currently used
  external?: boolean; // if so it's a link
  target: string; // url or equiv
  title?: string; // more information (mouseover)
  relme?: boolean; // linking to my own accounts
  subtext?: string; // even more information
  socialIcon?: ReactElement;
  socialColor?: string;
  i?: number; // index
}

// TODO take out all the unused link styles and put them in a playground

export const glowing = keyframes`
  0% { background-position: 100% 100% }
  50% { background-position: 400% 100% }
  100% { background-position: 100% 100% }
`;

export const BoxLink = forwardRef<AppLinkProps, 'a'>(
  ({ children, external, target, title, relme, ...rest }, ref) => (
    <ChakraLink
      {...(external ? { href: { target } } : { as: GatsbyLink, to: target })}
      rel={relme ? 'me' : ''}
      ref={ref}
      href={target}
      title={title}
      display="block"
      my="1rem"
      sx={{
        '&:hover': {
          textDecoration: 'none',
        },
      }}
      {...rest}
    >
      {children}
    </ChakraLink>
  ),
);

export const InlineLink = forwardRef<AppLinkProps, 'a'>(
  ({ children, external, target, title, relme, ...rest }, ref) => (
    <ChakraLink
      {...(external ? { href: { target } } : { as: GatsbyLink, to: target })}
      rel={relme ? 'me' : ''}
      ref={ref}
      href={target}
      title={title}
      fontWeight={700}
      textDecoration="none"
      bgGradient="linear(to-r, white, white)"
      backgroundSize="100% 1px"
      backgroundPosition="100% 100%"
      backgroundRepeat="no-repeat"
      sx={{
        '&:hover': {
          textDecoration: 'none',
          bgGradient: 'linear(to-r, #ff0000,#eeff00,#00ff08,#00ffe5,#2600ff,#ee00ff)',
        },
      }}
      {...rest}
    >
      {children}
      {external && (
        <>
          {' '}
          <ExternalLinkIcon mx="2px" position={'relative'} top={'-2px'} />
        </>
      )}
    </ChakraLink>
  ),
);

export const FuzzyRainbowLink = forwardRef<AppLinkProps, 'a'>(
  ({ children, target, title, relme, ...rest }, ref) => (
    <ChakraLink
      as={GatsbyLink}
      ref={ref}
      textDecoration="none"
      textStyle="nav"
      color="#ddd"
      to={target}
      sx={{
        position: 'relative',
        '&:before': {
          transition: 'width 0.2s',
          content: "''",
          width: '0%',
          position: 'absolute',
          left: '0',
          bottom: '0',
          height: '3px',
          bgGradient: 'linear(to-r, #ff0000,#eeff00,#00ff08,#00ffe5,#2600ff,#ee00ff)',
          backgroundSize: '100% 3px',
          zIndex: '-2',
          backgroundPosition: '100% 100%',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1px)',
        },
        '&:hover': {
          textDecoration: 'none',
        },
        '&:hover:before': {
          width: '100%',
        },
      }}
      {...rest}
    >
      {children}
    </ChakraLink>
  ),
);

const colorOptions: string[] = [
  '#ff7700,#ff0000,#eeff00',
  '#03f918,#ff7700,#00ddff',
  '#00ffe5,#2600ff,#ee00ff',
  '#00c3ff,#ff0000,#ffb300',
  '#00ff08,#7b00ff,#ffd900',
];

// TODO make the text gradient slide in too

export const NavLink = forwardRef<AppLinkProps, 'a'>(
  ({ children, target, title, relme, variant, i = 1, ...rest }, ref) => (
    <Box
      display={variant === 'sublink' ? ['block', 'none'] : ['block']}
      mt={variant === 'sublink' ? 0 : ['0.8em', '1em']}
    >
      <ChakraLink
        as={GatsbyLink}
        ref={ref}
        textDecoration="none"
        textStyle="nav"
        color="#ddd"
        fontSize={variant === 'sublink' ? '2rem' : 'inherit'}
        to={target}
        sx={{
          position: 'relative',
          // span: {
          //   bg: 'white',
          //   backgroundClip: 'text',
          //   width: '0%',
          // },
          '&:before': {
            transition: 'width 0.2s',
            content: "''",
            width: '0%',
            position: 'absolute',
            left: '0',
            bottom: ['2px', '7px'],
            height: ['2px', '3px'],
            bgGradient: `linear(to-r, ${colorOptions[i % 5]})`,
            backgroundSize: ['100% 2px', '100% 3px'],
            zIndex: '-2',
            backgroundPosition: '100% 100%',
            backgroundRepeat: 'no-repeat',
          },
          '&:hover': {
            textDecoration: 'none',
            color: 'white',
          },
          '&:hover:before': {
            width: '100%',
          },
          // '&:hover span': {
          //   bgGradient: `linear(to-r, ${colorOptions[i % 5]})`,
          // },
        }}
        {...rest}
      >
        <span>{children}</span>
      </ChakraLink>
    </Box>
  ),
);

export const FooterLink = forwardRef<AppLinkProps, 'a'>(
  (
    {
      children,
      external,
      target,
      socialIcon,
      socialColor,
      subtext,
      title,
      relme,
      ...rest
    },
    ref,
  ) => (
    <ListItem>
      <ChakraLink
        {...(external ? { href: { target } } : { as: GatsbyLink, to: target })}
        rel={relme ? 'me' : ''}
        ref={ref}
        href={target}
        title={title}
        fontWeight={500}
        whiteSpace="nowrap"
        textDecoration="none"
        color="white"
        sx={{
          span: {
            textDecoration: 'none',
            position: 'relative',
          },
          svg: { display: 'inline', position: 'relative', bottom: '-5px' },
          '&:hover': {
            textDecoration: 'none',
          },
          '&:hover svg': {
            color: socialColor,
          },
          '& span:after': {
            transition: 'width 0.2s',
            content: "''",
            width: '100%',
            position: 'absolute',
            right: '0',
            bottom: '0',
            height: '1px',
            bgGradient: 'linear(to-r, white, white)',
            backgroundSize: '100% 1px',
            backgroundPosition: '100% 100%',
            backgroundRepeat: 'no-repeat',
          },
          '& span:before': {
            content: "''",
            width: '100%',
            position: 'absolute',
            right: '0',
            bottom: '0',
            height: '1px',
            bgGradient: 'linear(to-r, #ff0000,#eeff00,#00ff08,#00ffe5,#2600ff,#ee00ff)',
            backgroundSize: '100% 1px',
            backgroundPosition: '100% 100%',
            backgroundRepeat: 'no-repeat',
          },

          '&:hover span:after': {
            width: '0%',
          },
          '&:hover span:before': {
            // filter: 'blur(1px)',
          },
        }}
        {...rest}
      >
        <>
          {subtext && <SubText>{subtext}</SubText>}
          {socialIcon} <span>{children}</span>
        </>
      </ChakraLink>
    </ListItem>
  ),
);

export const NavIcon = forwardRef<AppLinkProps, 'a'>(
  (
    { external, target, socialIcon, socialColor, subtext, title, relme, ...rest },
    ref,
  ) => (
    <ChakraLink
      {...(external ? { href: { target } } : { as: GatsbyLink, to: target })}
      rel={relme ? 'me' : ''}
      ref={ref}
      href={target}
      title={title}
      fontWeight={500}
      whiteSpace="nowrap"
      textDecoration="none"
      color="white"
      sx={{
        svg: { display: 'block', transition: 'all 0.2s' },
        '&:hover svg': {
          color: socialColor,
        },
      }}
      {...rest}
    >
      <TapWrap>{socialIcon}</TapWrap>
    </ChakraLink>
  ),
);
