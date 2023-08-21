import React from 'react';
import { forwardRef, Stack as ChakraStack, type StackProps } from '@chakra-ui/react';

import { GlassBox } from '../components/GlassBox';

interface CopyStackProps extends StackProps {
  color?: string;
}

export const CopyStack = forwardRef<CopyStackProps, 'div'>(
  ({ children, color, ...rest }, ref) => (
    <GlassBox fallback={color} {...rest}>
      <ChakraStack
        px={['1rem', '1.6rem']}
        py={['1rem', '1.2rem']}
        spacing={[4, 6]}
        ref={ref}
      >
        {children}
      </ChakraStack>
    </GlassBox>
  ),
);

CopyStack.displayName = 'Stack';
