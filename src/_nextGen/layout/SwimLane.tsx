import React, { useEffect, useRef, useState } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { useScroll, useTransform } from 'framer-motion';

import { GalleryWrap } from '../galleries';
import { ChakraBox } from '../animations';
import { ParsedImageData } from '../imagery';

import { CopyStack } from './CopyStack';

interface SwimLaneProps extends BoxProps {
  images?: ParsedImageData[];
}

const splitArray = (array: any[]) => {
  let odd = [];
  let even = [];

  for (const [i, element] of array.entries()) {
    if (i % 2 === 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  }

  // create an object with the odd and even array in it
  const returnObject = {
    odd,
    even,
  };

  return returnObject;
};

export const SwimLane = ({ children, images, ...rest }: SwimLaneProps) => {
  const [oddImages, setOddImages] = useState<ParsedImageData[]>();
  const [evenImages, setEvenImages] = useState<ParsedImageData[]>();

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

  useEffect(() => {
    if (!images) return;
    const { odd, even } = splitArray(images);
    setOddImages(odd);
    setEvenImages(even);
  }, [images]);

  return (
    <Box
      minH={'calc(100vh)'}
      width="100%"
      {...rest}
      display="flex"
      flexDirection={['column', 'column', 'row']}
      ref={parallaxRef}
    >
      <ChakraBox flexBasis={'35%'} display={['none', 'none', 'block']}>
        {oddImages && <GalleryWrap galleryType="imagecolumns" imageArray={oddImages} />}
      </ChakraBox>
      <Box alignItems="center">
        <Box
          pos="sticky"
          transform="translate( 0, -50%,)"
          mx={['0', '2rem']}
          my={['0', '2rem']}
          flexDirection={['column', 'row']}
          // Margin needs to match the top/bottom
          top="2rem"
          bottom="2rem"
          display="flex"
          alignItems="center"
        >
          <CopyStack maxW={['none', 'none', '555px']}>{children}</CopyStack>
          <Box display={['block', 'none']}>
            {images && <GalleryWrap galleryType="imageslider" imageArray={images} />}
          </Box>
        </Box>
      </Box>
      <ChakraBox flexBasis={'35%'} display={['none', 'block']}>
        {evenImages && <GalleryWrap galleryType="imagecolumns" imageArray={evenImages} />}
      </ChakraBox>
    </Box>
  );
};
