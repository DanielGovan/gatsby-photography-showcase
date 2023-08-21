import React from 'react';

import { Flex as ChakraFlex, type FlexProps, forwardRef } from '@chakra-ui/react';

export const Flex = forwardRef<FlexProps, 'div'>(({ children, ...rest }, ref) => (
  <ChakraFlex ref={ref} {...rest}>
    {children}
  </ChakraFlex>
));

Flex.displayName = 'Flex';
