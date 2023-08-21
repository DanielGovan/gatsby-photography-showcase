import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Box } from '../primitives';
import { Button } from '../button';
import { TapWrap } from '../animations';

const scrollHandler = () => {
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  });
};

const ScrollButton = () => {
  return (
    <Box
      position="absolute"
      bottom="1rem"
      left="-4rem"
      display={['none', 'none', 'block']}
    >
      <Button variant="link" className="root" onClick={() => scrollHandler()}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <TapWrap>
            <Icon w="40px" h="40px" color="white" as={FaArrowDown} />
          </TapWrap>
        </motion.div>
      </Button>
    </Box>
  );
};

export default ScrollButton;
