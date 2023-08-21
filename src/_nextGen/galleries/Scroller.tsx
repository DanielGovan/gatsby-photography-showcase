import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Box } from '@chakra-ui/react';

import { ChakraBox } from '../animations';

import { ImageWrap, ParsedImageData } from '../imagery/ImageWrap';

import { GalleryProps } from '.';

interface ScrollerProps extends GalleryProps {
  angled?: boolean;
  reversed?: boolean;
}

export const Scroller = ({
  imageArray,
  angled,
  reversed,
  setZoomTarget,
}: ScrollerProps) => {
  const [jumbledImages, setJumbledImages] = useState<ParsedImageData[] | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  let { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ['start end', 'end start'],
  });
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  useEffect(() => {
    if (!imageArray || jumbledImages) {
      return;
    }
    setJumbledImages(imageArray.sort(() => Math.random() - 0.5));
  }, [imageArray, jumbledImages]);

  return (
    <Box w="100vw" overflow="hidden">
      <Box
        transform={angled ? (reversed ? 'rotate(-3deg)' : 'rotate(3deg)') : ''}
        position="relative"
        mx="auto"
        top="2rem"
        my="6rem"
        zIndex={9}
        style={{
          direction: `${reversed ? 'rtl' : 'ltr'}`,
        }}
        className={reversed ? 'reversed' : ''}
        ref={sliderRef}
      >
        <ChakraBox whiteSpace="nowrap" transition="transform 0.2s ease" style={{ x: y }}>
          {jumbledImages &&
            jumbledImages.map((imageData, index) => (
              <Box
                key={imageData.fileName}
                borderRadius="8px"
                boxShadow="0px 0px 5px 2px #ffffffbf,0px 0px 10px 4px #ffff007f,0px 0px 20px 8px #ff02027f"
                maxW="300px"
                display="inline-block"
                border="solid 5px black"
                sx={{
                  '&:nth-of-type(even)': {
                    position: 'relative',
                    top: '2rem',
                    margin: '0 -1rem',
                  },
                  '&:nth-of-type(odd)': {
                    position: 'relative',
                    top: '-2rem',
                    margin: '0 -1rem',
                  },
                }}
              >
                <ImageWrap
                  imageData={imageData}
                  setZoomTarget={setZoomTarget}
                  imageIndex={index}
                />
              </Box>
            ))}
        </ChakraBox>
      </Box>
    </Box>
  );
};
