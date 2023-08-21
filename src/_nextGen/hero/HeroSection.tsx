import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, useBreakpointValue } from '@chakra-ui/react';

import { ContentBrace } from '../layout/ContentBrace';
import { ChakraBox, FadeInWrap } from '../animations';

import { ImageWrap, ImageWrapProps } from '../imagery';

import ScrollButton from './ScrollButton';

interface HeroSectionProps extends ImageWrapProps {
  children: React.ReactNode;
  bgPosition?: string;
}

const HeroSection = ({
  imageData,
  bgPosition = 'center 30%',
  children,
}: HeroSectionProps) => {
  let parallaxRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['end end', 'end start'],
  });
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '-200px']);
  let opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <FadeInWrap>
      <Box pos="relative" minH={isMobile ? '1000px' : '100vh'} w="100%" mb="10rem">
        <ChakraBox
          style={{ opacity }}
          pos="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          sx={{ '& image': { objectPosition: bgPosition } }}
        >
          <ImageWrap fullBleed={true} imageData={imageData} />
        </ChakraBox>
        <ContentBrace
          pos="absolute"
          height={isMobile ? '800px' : '100vh'}
          pt={['70vh', '80vh']}
          px={0}
        >
          <motion.div
            ref={parallaxRef}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div style={{ y: isMobile ? 0 : y }}>{children}</motion.div>
          </motion.div>
          <ScrollButton />
        </ContentBrace>
      </Box>
    </FadeInWrap>
  );
};

export default HeroSection;
