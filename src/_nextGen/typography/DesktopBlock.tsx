import React from 'react';
import { Box } from '@chakra-ui/react';

export const DesktopBlock = ({ children }: { children: React.ReactNode }) => (
  <Box display={['inline', 'block']}>{children}</Box>
);
