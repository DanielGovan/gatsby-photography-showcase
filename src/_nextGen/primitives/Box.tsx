import React from 'react';
import { Box as ChakraBox, type BoxProps, forwardRef } from '@chakra-ui/react';

export const Box = forwardRef<BoxProps, 'div'>(({ children, ...rest }, ref) => (
  <ChakraBox ref={ref} {...rest}>
    {children}
  </ChakraBox>
));

Box.displayName = 'Box';
