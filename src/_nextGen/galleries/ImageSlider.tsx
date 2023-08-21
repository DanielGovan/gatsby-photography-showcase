import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { Icon, Progress } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';

import { Button } from '../button';
import { ChakraBox } from '../animations';
import { Box, Flex } from '../primitives';
import { ImageWrap } from '../imagery';
import { GlassBox } from '../components/GlassBox';

import { GalleryProps } from '.';

interface ImageSliderProps extends GalleryProps {
  targetIndex?: number;
  isModal?: boolean;
  variant?: 'testimonial';
}

export const ImageSlider = ({
  imageArray,
  targetIndex = 1,
  isModal = false,
  variant,
}: ImageSliderProps) => {
  let [count, setCount] = useState(targetIndex);
  const [ref, { width }] = useMeasure();
  let [direction, setDirection] = useState(1);
  const animObj = { direction, width };
  const imageNumber = imageArray.length;
  // const isVariant = variant === 'testimonial';

  // todo: if isVariant and desktop, show more slides?

  const navHandler = (direction: number) => {
    setDirection(direction);
    const target = count + direction * 1;
    if (target === -1) {
      setCount(imageNumber - 1);
      return;
    }
    if (target === imageNumber) {
      setCount(0);
      return;
    }
    setCount(count + direction * 1);
  };
  const currentImage = imageArray[count];
  const { alt, humanDate } = currentImage;

  return (
    <Flex
      ref={ref}
      w="100vw"
      maxW="100%"
      h={isModal ? 'calc(100vw * 1.5)' : 'calc(100vw * 1.2)'}
      mt={isModal ? '0' : ['2rem', '0']}
      maxH="calc(var(--vh, 1vh) * 100)"
      pos="relative"
      justify="center"
      align="center"
      overflow="hidden"
      bg={['black', 'transparent']}
    >
      <Progress
        value={(count / imageNumber) * 100}
        position="absolute"
        top="0"
        left="0"
        right="0"
        zIndex={999}
        onClick={e => e.stopPropagation()}
        cursor="default"
      />
      <Flex
        justify="space-between"
        zIndex={99}
        width="calc(100vw - 50px)"
        cursor="default"
        onClick={e => e.stopPropagation()}
      >
        <Button
          onClick={() => navHandler(-1)}
          variant="icon"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FaChevronCircleLeft} h="40px" w="40px" />
        </Button>
        <Button
          textAlign="right"
          onClick={() => navHandler(+1)}
          variant="icon"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FaChevronCircleRight} h="40px" w="40px" />
        </Button>
      </Flex>
      <AnimatePresence custom={animObj}>
        <ChakraBox
          key={count}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={animObj}
          pos="absolute"
          justifyContent="center"
          alignItems="center"
          cursor="default"
          onClick={e => e.stopPropagation()}
          //@ts-ignore chakra / framermotion conflict
          transition={{
            duration: 0.4,
          }}
        >
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            zIndex={999}
            textAlign="center"
          >
            <GlassBox
              px="0.8rem"
              py="0.4rem"
              mb="0.5rem"
              fontSize="1.2rem"
              display="inline-block"
            >
              {alt && alt} {humanDate && alt && <>-</>} {humanDate ?? humanDate}
            </GlassBox>
          </Box>
          <ImageWrap isSlider={true} imageData={currentImage} />
        </ChakraBox>
      </AnimatePresence>
    </Flex>
  );
};

type AnimObj = { direction: number; width: number };

const variants = {
  enter: ({ direction, width }: AnimObj) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }: AnimObj) => ({
    x: direction * -width,
  }),
};
