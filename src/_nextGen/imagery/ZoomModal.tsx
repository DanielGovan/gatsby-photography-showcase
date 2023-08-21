import React, { Dispatch, ReactNode, SetStateAction } from 'react';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

import { Box } from '../primitives';
import { ChakraBox } from '../animations';
import { ImageSlider } from '../galleries';

import { ImageWrap, ParsedImageData } from './ImageWrap';

type ModalWrapProps = {
  children: ReactNode;
  fileName?: string;
  isOpen: boolean;
  onClose: () => void;
};

const ModalWrap = ({ children, isOpen, onClose, fileName }: ModalWrapProps) => (
  <Modal
    // blockScrollOnMount={false}
    size="9xl"
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay
      bg="blackAlpha.500"
      backdropFilter={['none', 'blur(10px) grayscale(1)']}
    />
    <ChakraBox
      background="transparent"
      maxH="calc(var(--vh, 1vh) * 100)"
      as={ModalContent}
      p="0"
      w="100vw"
      // layoutId={fileName}
      margin="0"
    >
      <ModalCloseButton
        zIndex={999}
        sx={{
          top: ['1rem', '2rem', '3rem'],
          right: ['1rem', '2rem', '3rem'],
          width: '50px',
          height: '50px',
          backdropFilter: ['none', 'blur(30px) saturate(150%) brightness(0.5)'],
          bg: ['rgba(0,0,0,0.9)', 'none'],
          svg: {
            height: '40px',
            width: '40px',
          },
        }}
      />
      <ModalBody
        cursor="zoom-out"
        onClick={() => {
          // console.log('CLICKED');
          onClose();
        }}
        maxH="calc(var(--vh, 1vh) * 100)"
        p={0}
      >
        {children}
      </ModalBody>
    </ChakraBox>
  </Modal>
);

type ZoomModalProps = {
  imageData: ParsedImageData;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const ZoomModal = ({ imageData, isOpen, onClose }: ZoomModalProps) => {
  const { alt, humanDate, fileName } = imageData;
  return (
    <ModalWrap isOpen={isOpen} onClose={onClose} fileName={fileName}>
      <Box>
        {alt && alt} {humanDate && alt && <>-</>} {humanDate && humanDate}
      </Box>
      <ImageWrap imageData={imageData} isZoomed={true} />
    </ModalWrap>
  );
};

type GalleryModalProps = {
  zoomTarget: number | null;
  setZoomTarget: Dispatch<SetStateAction<number | null>>;
  imageArray: ParsedImageData[];
  galleryName?: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const GalleryModal = ({
  zoomTarget,
  imageArray,
  // galleryName,
  isOpen,
  onClose,
}: GalleryModalProps) => {
  if (zoomTarget === null) return null;
  return (
    <ModalWrap isOpen={isOpen} onClose={onClose}>
      <ImageSlider imageArray={imageArray} targetIndex={zoomTarget} isModal={true} />
    </ModalWrap>
  );
};
