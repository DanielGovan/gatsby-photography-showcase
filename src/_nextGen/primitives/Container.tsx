import React from 'react';

import {
  Container as ChakraContainer,
  type ContainerProps,
  forwardRef,
} from '@chakra-ui/react';

export const Container = forwardRef<ContainerProps, 'div'>(
  ({ children, ...rest }, ref) => (
    <ChakraContainer ref={ref} {...rest}>
      {children}
    </ChakraContainer>
  ),
);

Container.displayName = 'ContentWrap';
