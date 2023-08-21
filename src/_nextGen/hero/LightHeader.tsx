import React from 'react';
import { type HeadingProps, forwardRef } from '@chakra-ui/react';

import { HeroHeader } from '../typography';
import { textGlow } from '../../pages';

export const LightHeader = forwardRef<HeadingProps, 'h1'>(
  ({ children, ...rest }, ref) => (
    <HeroHeader
      sx={{
        fontSize: ['3rem', '4rem', '5rem', '6rem'],
        color: 'rgba(255,255,255,0.8)',
        letterSpacing: '2px',
        fontWeight: '300 !important',
        span: {
          color: '#fff',
          fontWeight: '700 !important',
          animation: `${textGlow} 12s linear infinite`,
          textShadow:
            '0 0 20px #0072ff, 0 0 40px #0072ff, 0 0 80px #0072ff, 0 0 160px #0072ff, 0 0 320px #0072ff ,0 0 20px #0072ff, 0 0 40px #0072ff, 0 0 80px #0072ff, 0 0 160px #0072ff, 0 0 320px #0072ff',
        },
      }}
    >
      {children}
    </HeroHeader>
  ),
);

LightHeader.displayName = 'LightHeader';
