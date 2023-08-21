import React from 'react';
import { Box as ChakraBox, BoxProps, forwardRef } from '@chakra-ui/react';

// Full height page wrap, ensures the footer sits at the bottom

export const FullHeight = forwardRef<BoxProps, 'div'>(({ children, ...rest }, ref) => (
  <ChakraBox minH={'calc(100vh - 95px)'} ref={ref} {...rest}>
    {children}
  </ChakraBox>
));

FullHeight.displayName = 'FullHeight';
