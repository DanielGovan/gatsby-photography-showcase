import React, { Dispatch, SetStateAction } from 'react';

import { type ButtonProps, forwardRef } from '@chakra-ui/react';

import { Button } from '../button';
import { ChakraBox } from '../animations';

interface MenuToggleProps extends ButtonProps {
  navIsVisible: boolean;
  setNavIsVisible: Dispatch<SetStateAction<boolean>>;
}

const tWidth = 50;
const tHeight = 5;
const tOffset = 3 * tHeight;
const tDuration = 0.6;

const toggleWrap = {
  menu: {
    scale: 1,
    opacity: 0.8,
    transition: { duration: tDuration / 2 },
  },
  close: {
    scale: 1.2,
    transition: { duration: tDuration / 2 },
  },
  hover: {
    scale: 1.2,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.9,
  },
};

const topLine = {
  menu: {
    rotate: [-45, 0, 0],
    y: [tOffset, tOffset, 0],
    transition: { duration: tDuration / 2 },
  },
  close: {
    rotate: [0, 0, -45],
    y: [0, tOffset, tOffset],
    transition: { duration: tDuration / 2 },
  },
};
const middleLine = {
  menu: { width: [0, tWidth, tWidth], transition: { duration: tDuration / 2 } },
  close: {
    width: [tWidth, tWidth, 0],
    transition: { duration: tDuration / 2 },
  },
};
const bottomLine = {
  menu: {
    rotate: [45, 0, 0],
    y: [-tOffset, -tOffset, 0],
    transition: { duration: tDuration / 2 },
  },
  close: {
    rotate: [0, 0, 45],
    y: [0, -tOffset, -tOffset],
    transition: { duration: tDuration / 2 },
  },
};

export const MenuToggle = forwardRef<MenuToggleProps, 'div'>(
  ({ navIsVisible, setNavIsVisible, children, ...rest }, ref) => {
    return (
      <ChakraBox
        variants={toggleWrap}
        animate={navIsVisible ? 'close' : 'menu'}
        whileTap="tap"
        whileHover="hover"
        top="0"
        sx={{
          'div div': {
            mx: 'auto',
            display: 'block',
            position: 'relative',
            width: `${tWidth}px`,
            height: `${tHeight}px`,
            bg: 'rgba(255,255,255,1)',
            borderRadius: 'full',
          },
        }}
      >
        <Button
          w={`${tWidth + 10}px`}
          h={`${tHeight * 11}px`}
          zIndex="99"
          fontSize="0px"
          variant="unstyled"
          position="relative"
          background="rgba(0,0,0,0.5)"
          backdropFilter="blur(10px) saturate(00%)"
          ref={ref}
          onClick={() => setNavIsVisible(!navIsVisible)}
          {...rest}
        >
          Toggle Menu
          <ChakraBox
            variants={topLine}
            animate={navIsVisible ? 'close' : 'menu'}
            bottom="10px"
          ></ChakraBox>
          <ChakraBox
            variants={middleLine}
            animate={navIsVisible ? 'close' : 'menu'}
          ></ChakraBox>
          <ChakraBox
            variants={bottomLine}
            animate={navIsVisible ? 'close' : 'menu'}
            top="10px"
          ></ChakraBox>
        </Button>
      </ChakraBox>
    );
  },
);

MenuToggle.displayName = 'MenuToggle';
