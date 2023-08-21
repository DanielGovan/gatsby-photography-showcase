import React from 'react';

import { ChakraBox } from '../animations';
import { ImageWrap } from '../imagery';

import { GalleryProps } from '.';

const gridWrapAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const gridItemAnim = {
  hidden: { opacity: 0, x: -20, y: -20 },
  show: { opacity: [0, 1], x: 0, y: 0 },
};

export const ImageGrid = ({ imageArray, setZoomTarget }: GalleryProps) => {
  return (
    <>
      {imageArray ? (
        <ChakraBox
          variants={gridWrapAnim}
          initial="hidden"
          whileInView="show"
          display="grid"
          gridGap="2px"
          gridTemplateColumns={[
            'repeat(auto-fit, minmax(120px, 1fr))',
            'repeat(auto-fit, minmax(230px, 1fr))',
          ]}
          gridAutoRows="minmax(50px, auto)"
          margin="0 auto"
          width="100%"
        >
          {imageArray &&
            imageArray.map((props, index) => (
              <ChakraBox
                display="inline-block"
                key={index}
                variants={gridItemAnim}
                layout
              >
                <ImageWrap
                  imageData={props}
                  setZoomTarget={setZoomTarget}
                  imageIndex={index}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ChakraBox>
            ))}
        </ChakraBox>
      ) : null}
    </>
  );
};
