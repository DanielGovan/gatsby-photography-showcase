import React from 'react';

import {
  Heading as ChakraHeading,
  type HeadingProps,
  forwardRef,
} from '@chakra-ui/react';

export const HeroHeader = forwardRef<HeadingProps, 'div'>(
  ({ children, ...rest }, ref) => (
    <ChakraHeading ref={ref} as="h1" size="xl" {...rest}>
      {children}
    </ChakraHeading>
  ),
);

HeroHeader.displayName = 'HeroHeader';

export const BodyHeader = forwardRef<HeadingProps, 'div'>(
  ({ children, ...rest }, ref) => (
    <ChakraHeading ref={ref} as="h2" size="lg" {...rest}>
      {children}
    </ChakraHeading>
  ),
);

BodyHeader.displayName = 'BodyHeader';

export const SubHeader = forwardRef<HeadingProps, 'div'>(({ children, ...rest }, ref) => (
  <ChakraHeading ref={ref} as="h3" size="md" {...rest}>
    {children}
  </ChakraHeading>
));

SubHeader.displayName = 'SubHeader';

export const SmallHeader = forwardRef<HeadingProps, 'div'>(
  ({ children, ...rest }, ref) => (
    <ChakraHeading ref={ref} as="span" size="sm" {...rest}>
      {children}
    </ChakraHeading>
  ),
);

SmallHeader.displayName = 'SmallHeader';
