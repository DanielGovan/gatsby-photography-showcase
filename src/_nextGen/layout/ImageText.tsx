import React, { useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
// import { useScroll, useTransform } from 'framer-motion';

import { GalleryWrap } from '../galleries';
import { ChakraBox } from '../animations';
import { ParsedImageData } from '../imagery';

import { CopyStack } from './CopyStack';

interface ImageTextProps extends BoxProps {
  images?: ParsedImageData[];
  flipHor?: boolean;
  color?: string;
}

export const ImageText = ({
  flipHor,
  children,
  images,
  color,
  ...rest
}: ImageTextProps) => {
  let parallaxRef = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: parallaxRef,
  //   offset: ['start 50%', 'end 50%'],
  // });
  // let opacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.05, 0.95, 1],
  //   ['0%', '100%', '100%', '0%'],
  // );
  return (
    <Box
      minH={'calc(100vh)'}
      {...rest}
      display="flex"
      flexDirection={['column', 'column', flipHor ? 'row-reverse' : 'row']}
      mb={['2rem', '10rem']}
      ref={parallaxRef}
    >
      <Box flexBasis={'38%'} alignItems="center">
        <Box
          display="flex"
          justifyContent={flipHor ? 'flex-start' : 'flex-end'}
          pos="sticky"
          transform="translate( 0, -50%,)"
          mx={['.5rem', '4rem']}
          my={['0', '5vh']}
          minH={['0', '0', 'calc(var(--vh, 1vh) * 100)']}
          top="0"
          bottom="0"
          alignItems="center"
        >
          <CopyStack color={color} maxW={['none', 'none', '555px']}>
            {children}
          </CopyStack>
        </Box>
      </Box>
      <ChakraBox
        flexBasis={'61.8%'}
        py={['0', '35vw']}
        maxH={['none', '400vh', 'none']}
        overflow="hidden"
      >
        {images && <GalleryWrap galleryType="imagecolumns" imageArray={images} />}
      </ChakraBox>
    </Box>
  );
};
