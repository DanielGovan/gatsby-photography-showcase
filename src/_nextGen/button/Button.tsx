import React from 'react';
import {
  Button as ChakraButton,
  type ButtonProps as ChakraButtonProps,
  forwardRef,
} from '@chakra-ui/react';

import { TapWrap } from '../animations';

interface ButtonProps extends ChakraButtonProps {
  active?: boolean;
}

export const Button = forwardRef<ButtonProps, 'div'>(
  ({ children, active, ...rest }, ref) => (
    <TapWrap>
      <ChakraButton
        ref={ref}
        textStyle="button"
        fontWeight="bold"
        boxShadow={
          active ? '0 0 4px 2px #fff,0 0 12px 6px #0ff,  0 0 24px 10px #00f' : 'none'
        }
        {...rest}
      >
        {children}
      </ChakraButton>
    </TapWrap>
  ),
);

Button.displayName = 'Button';
