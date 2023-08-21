import React from 'react';
import { Box as ChakraBox, type BoxProps, forwardRef } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface GlassBoxProps extends BoxProps {
  fallback?: string;
}

export const GlassBox = forwardRef<GlassBoxProps, 'div'>(
  ({ children, fallback, ...rest }, ref) => (
    <motion.div
      initial={{ scale: 0.8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
    >
      <ChakraBox
        ref={ref}
        backdropFilter={['none', 'blur(20px) saturate(300%)']}
        backgroundColor={[fallback || 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.2)']}
        borderRadius={['1rem']}
        border={['none', '1px solid rgba(255, 255, 255, 0.1)']}
        {...rest}
      >
        {children}
      </ChakraBox>
    </motion.div>
  ),
);

GlassBox.displayName = 'GlassBox';
