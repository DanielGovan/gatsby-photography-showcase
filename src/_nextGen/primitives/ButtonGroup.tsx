import React from 'react';

import {
  ButtonGroup as ChakraButtonGroup,
  type ButtonGroupProps,
  forwardRef,
} from '@chakra-ui/react';

export const ButtonGroup = forwardRef<ButtonGroupProps, 'div'>(
  ({ children, ...rest }, ref) => (
    <ChakraButtonGroup ref={ref} {...rest}>
      {children}
    </ChakraButtonGroup>
  ),
);

ButtonGroup.displayName = 'ButtonGroup';
