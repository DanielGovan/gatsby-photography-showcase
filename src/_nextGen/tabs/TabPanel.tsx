import React from 'react';
import {
  forwardRef,
  TabPanel as ChakraTabPanel,
  type TabPanelProps,
} from '@chakra-ui/react';

export const TabPanel = forwardRef<TabPanelProps, 'div'>(({ children, ...rest }, ref) => (
  <ChakraTabPanel ref={ref} {...rest}>
    {children}
  </ChakraTabPanel>
));

TabPanel.displayName = 'Tab';
