import React from 'react';
import { forwardRef, ContainerProps, Box } from '@chakra-ui/react';

import { Container } from '../primitives';

export const ContentBrace = forwardRef<ContainerProps, 'div'>(
  ({ children, ...rest }, ref) => (
    <Container ref={ref} maxW="1210px" px={['0.5rem', '2rem']} mx="auto">
      <Box {...rest}>{children}</Box>
    </Container>
  ),
);

Container.displayName = 'ContentWrap';
