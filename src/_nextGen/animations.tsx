import React, { ReactNode } from 'react';
import { chakra, shouldForwardProp, Center, BoxProps } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

export const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
});

// this might be redundant?
export const ShowOnView = ({ children }: BoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ delay: 0.4, duration: 0.3, ease: 'easeOut' }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

type FadeInWrapProps = { children: React.ReactNode; after?: number };
// this might be redundant?
export const FadeInWrap = ({ children, after = 0.8 }: FadeInWrapProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: after }}
    >
      {children}
    </motion.div>
  );
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: 'Infinity',
  ease: 'easeInOut',
};

const loadingContainer = {
  width: '10rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const loadingCircle = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  backgroundColor: 'white',
  borderRadius: '100%',
};

export const LoadingRipple = () => {
  return (
    <Center height="calc(var(--vh, 1vh) * 100)">
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </Center>
  );
};

export const TapWrap = ({ children }: { children: ReactNode }) => (
  <ChakraBox
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </ChakraBox>
);

TapWrap.displayName = 'TapWrap';
