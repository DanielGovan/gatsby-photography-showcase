import React from 'react';
import {
  forwardRef,
  TabPanels as ChakraTabPanels,
  type TabPanelsProps,
} from '@chakra-ui/react';

export const TabPanels = forwardRef<TabPanelsProps, 'div'>(
  ({ children, ...rest }, ref) => (
    <ChakraTabPanels ref={ref} {...rest}>
      {children}
    </ChakraTabPanels>
  ),
);

TabPanels.displayName = 'Tab';
