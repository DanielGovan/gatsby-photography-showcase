import React from 'react';
import {
  forwardRef,
  Tab as ChakraTab,
  TabList as ChakraTabList,
  Tabs as ChakraTabs,
  type TabsProps as ChakraTabsProps,
} from '@chakra-ui/react';

export interface TabsProps extends ChakraTabsProps {
  titles: string[];
}

export const Tabs = forwardRef<TabsProps, 'div'>(({ titles, children, ...rest }, ref) => {
  return (
    <ChakraTabs ref={ref} data-testid="tabs" {...rest}>
      <ChakraTabList>
        {titles.map((title, i) => (
          <ChakraTab px={['0.5rem', '1rem']} key={`${title}${i}`}>
            {title}
          </ChakraTab>
        ))}
      </ChakraTabList>
      {children}
    </ChakraTabs>
  );
});

Tabs.displayName = 'Tabs';
