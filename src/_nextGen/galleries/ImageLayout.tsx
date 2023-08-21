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

const getShape = (aspectRatio: number) => {
  if (aspectRatio < 0.55) return { gridColumn: 'span 1', gridRow: 'span 2' };
  if (aspectRatio < 0.67) return { gridColumn: 'span 2', gridRow: 'span 3' };
  if (aspectRatio < 0.77) return { gridColumn: 'span 3', gridRow: 'span 4' };
  if (aspectRatio < 0.85) return { gridColumn: 'span 4', gridRow: 'span 5' };
  if (aspectRatio < 1.05) return { gridColumn: 'span 2', gridRow: 'span 2' };
  if (aspectRatio < 1.21) return { gridColumn: 'span 6', gridRow: 'span 5' };
  if (aspectRatio < 1.26) return { gridColumn: 'span 5', gridRow: 'span 4' };
  if (aspectRatio < 1.35) return { gridColumn: 'span 4', gridRow: 'span 3' };
  if (aspectRatio < 1.55) return { gridColumn: 'span 3', gridRow: 'span 2' };
  if (aspectRatio < 2) return { gridColumn: 'span 5', gridRow: 'span 3' };
  // if (aspectRatio < 1.75) return { gridColumn: 'span 5', gridRow: 'span 3' };
  // return { gridColumn: 'span 4', gridRow: 'span 4' }; // square / 1
};

export const ImageLayout = ({ imageArray, setZoomTarget }: GalleryProps) => {
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
            'repeat(16, 1fr)',
            // 'repeat(auto-fit, minmax(120px, 1fr))',
            // 'repeat(auto-fit, minmax(230px, 1fr))',
          ]}
          // gridAutoRows="minmax(100px, auto)"
          gridAutoRows="4.256vw"
          gridAutoFlow="dense"
          margin="0 auto"
          width="100%"
        >
          {imageArray &&
            imageArray.map((props, index) => {
              const { aspectRatio } = props;
              const imageShape = getShape(aspectRatio);
              // console.log(aspectRatio, shape);
              return (
                <ChakraBox
                  display="inline-block"
                  key={index}
                  variants={gridItemAnim}
                  layout
                  sx={imageShape}
                >
                  <ImageWrap
                    imageData={props}
                    isGridded={true}
                    setZoomTarget={setZoomTarget}
                    imageIndex={index}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </ChakraBox>
              );
            })}
        </ChakraBox>
      ) : null}
    </>
  );
};
