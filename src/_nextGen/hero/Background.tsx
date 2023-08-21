import React from 'react';
import { Box as ChakraBox, BoxProps, forwardRef } from '@chakra-ui/react';

interface BackgroundProps extends BoxProps {
  colors: string[];
}

const variants = {
  initial: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 5, duration: 5 } },
};

export const Background = forwardRef<BackgroundProps, 'div'>(
  ({ colors, children, ...rest }, ref) => {
    return (
      <ChakraBox
        variants={variants}
        initial="initial"
        animate="show"
        exit="initial"
        ref={ref}
        minH="100%"
        position="absolute"
        inset="0"
        transform="translate(0,0)"
        background={[
          `${colors[0]}`,
          `
  radial-gradient(
    circle at 0% 20%,
    ${colors[0]}, 
    transparent 80%
  ),
  radial-gradient(
    circle at 100% 40%,
    ${colors[1]}, 
    transparent 80%
  ),
  radial-gradient(
    at 0% 60%,
    ${colors[2]}, 
    transparent 80%
  )
  `,
        ]}
        {...rest}
      >
        {children}
      </ChakraBox>
    );
  },
);

Background.displayName = 'Background';
