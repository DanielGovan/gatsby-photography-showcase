import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';

import { ImageWrap, ParsedImageData } from '../imagery';
import useScrollPosition from '../../hooks/useScrollPosition';
import useInterval from '../../hooks/useInterval';

import { GalleryProps } from './GalleryWrap';

// import useInterval from '../hooks/useInterval';
// import useScrollPosition from '../hooks/useScrollPosition';

// import { ImageWrap, ParsedImageData } from '../_nextGen/imagery';

interface ImageCarouselProps extends GalleryProps {
  type?: string;
  angled?: boolean;
  reversed?: boolean;
}

export const ImageCarousel = ({
  imageArray,
  setZoomTarget,
  type,
  angled,
  reversed,
}: ImageCarouselProps) => {
  const [jumbledImages, setJumbledImages] = useState<ParsedImageData[] | null>(null);
  const [scrollPosition] = useScrollPosition();
  const [offset, setOffset] = useState<number>(1);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageArray || jumbledImages) {
      return;
    }
    setJumbledImages(imageArray.sort(() => Math.random() - 0.5));
  }, [imageArray, jumbledImages]);

  useInterval(
    () => {
      if (sliderRef && sliderRef?.current && sliderRef?.current?.offsetTop) {
        setOffset((sliderRef.current.offsetTop - scrollPosition + 300) / 1.8);
      }
    },
    100, // Delay in milliseconds or null to stop it eg isPlaying ? delay : null,
  );

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
        <Box
          whiteSpace="nowrap"
          transition="transform 0.2s ease"
          style={{
            transform: `${
              reversed ? `translateX(${offset}px)` : `translateX(-${offset}px)`
            }`,
          }}
        >
          {jumbledImages &&
            jumbledImages.map((props, index) => (
              <Box
                key={props.fileName}
                display="inline-block"
                border="solid 4px #101010"
                borderRadius="8px"
                boxShadow="0 0 5px 2px rgba(255,255,255,0.75),0 0 10px 4px #00aaff7f,0 0 20px 8px #0000ff7f"
                maxW="300px"
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
                  imageData={props}
                  setZoomTarget={setZoomTarget}
                  imageIndex={index}
                />
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
