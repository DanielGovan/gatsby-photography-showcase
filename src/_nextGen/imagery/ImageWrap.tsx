import React from 'react';
import {
  Box,
  Image as ChakraImage,
  type ImageProps,
  useDisclosure,
  forwardRef,
} from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { ChakraBox } from '../animations';

import { ZoomModal } from './ZoomModal';

export type ParsedImageData = {
  image: IGatsbyImageData;
  alt: string;
  dateTaken: string;
  humanDate: string;
  fileName: string;
  aspectRatio: number;
};

export interface ImageWrapProps extends ImageProps {
  imageIndex?: number;
  imageData: ParsedImageData;
  fullBleed?: boolean; //combine these into 1 variant prop
  isZoomed?: boolean; //combine these into 1 variant prop
  isGridded?: boolean; //combine these into 1 variant prop
  isSlider?: boolean; //combine these into 1 variant prop
  setZoomTarget?: any;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}
// this component is either called by itself or by a gallery

export const ImageWrap = forwardRef<ImageWrapProps, 'div'>(
  (
    {
      imageData,
      isZoomed,
      isGridded,
      fullBleed,
      setZoomTarget,
      className,
      imageIndex,
      isSlider,
      ...rest
    },
    ref,
  ) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    if (!imageData?.image) return null;
    const { image, alt = '', aspectRatio } = imageData;

    const imageHover = {
      cursor: 'zoom-in',
      '&:hover': {
        zIndex: '2',
        transform: 'scale(1.02)',
        boxShadow:
          '0px 0px 5px 2px #ffffffbf,0px 0px 10px 4px #ffff007f,0px 0px 20px 8px #ff02027f',
      },
    };

    const imageStyles = {
      heroImage: {},
      closeUpImage: { cursor: 'zoom-out' },
      galleryImage: { ...imageHover, '&:hover ': {} },
      soloImage: { ...imageHover },
      griddedImage: {
        ...imageHover,
        height: '100%',
        width: '100%',
        div: { height: '100%', width: '100%' },
      },
    };

    const situationClass =
      fullBleed || isSlider
        ? 'heroImage'
        : isGridded
        ? 'griddedImage'
        : isZoomed
        ? 'closeUpImage'
        : setZoomTarget
        ? 'galleryImage'
        : 'soloImage';
    // TODO: supress zooming if on mobile
    // Some chakra thing? Some getWidth hook?

    const handleZoomIn = () => {
      if (isZoomed || fullBleed || isSlider) return;
      if (setZoomTarget) {
        setZoomTarget(imageIndex);
        return;
      }
      onOpen();
    };

    return (
      <>
        {!isZoomed && (
          <ZoomModal
            imageData={imageData}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        )}
        <ChakraBox
          className={`${className} ${situationClass}`}
          pos={fullBleed ? 'static' : 'relative'}
          // layoutId={isZoomed ? undefined : fileName}
          transition="all .3s"
          sx={imageStyles[situationClass]}
          onClick={handleZoomIn}
        >
          <Box
            sx={
              isGridded
                ? {
                    '.gatsby-image-wrapper-constrained img': {
                      maxHeight: 'calc(var(--vh, 1vh) * 100)',
                      objectFit: 'cover',
                      margin: '0 auto',
                    },
                  }
                : {
                    '.gatsby-image-wrapper-constrained img': {
                      maxHeight: 'calc(var(--vh, 1vh) * 100)',
                      objectFit: 'contain',
                      margin: '0 auto',
                    },
                  }
            }
          >
            <ChakraImage
              ref={ref}
              loading={fullBleed ? 'eager' : 'lazy'}
              as={GatsbyImage}
              image={image}
              userSelect="none"
              sx={
                fullBleed
                  ? {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }
                  : {}
              }
              alt={alt}
              {...rest}
            />
          </Box>
          <Box pos="absolute" top="0" left="0" right="0" bottom="0" zIndex={2}></Box>
        </ChakraBox>
      </>
    );
  },
);

ImageWrap.displayName = 'Image';
