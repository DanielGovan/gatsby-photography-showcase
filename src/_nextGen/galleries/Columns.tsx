import React from 'react';

import { ChakraBox } from '../animations';
import { ImageWrap } from '../imagery';

import { GalleryProps } from '.';

const colWrapAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    // transition: {
    //   staggerChildren: 0.1,
    // },
  },
};

const colItemAnim = {
  hidden: { opacity: 0, x: -20, y: -20 },
  show: { opacity: [0, 1], x: 0, y: 0 },
};

export const ImageColumns = ({
  imageArray,
  setZoomTarget,
  subType,
  className,
}: GalleryProps) => {
  let imageCount = imageArray?.length;
  let columnCount = 3;
  if (imageCount < 12) {
    columnCount = 2;
  }
  if (imageCount > 35) {
    columnCount = 4;
  }
  const wideCount = [columnCount - 1 || 1, columnCount, columnCount + 1, columnCount + 2];
  const narrowCount = [
    columnCount - 3 || 1,
    columnCount - 2 || 1,
    columnCount - 1 || 1,
    columnCount,
  ];
  return (
    <>
      {imageArray ? (
        <ChakraBox
          variants={colWrapAnim}
          initial="hidden"
          whileInView="show"
          placeContent="center"
          columnGap="0px"
          sx={{
            //@ts-ignore
            columnCount: [1, 2, subType === 'wide' ? wideCount : narrowCount],
          }}
          margin="0 auto"
          width="100%"
        >
          {imageArray &&
            imageArray.map((props, index) => (
              <ChakraBox
                display="inline-block"
                // mb="10px"
                key={index}
                variants={colItemAnim}
                layout
              >
                <ImageWrap
                  imageData={props}
                  setZoomTarget={setZoomTarget}
                  imageIndex={index}
                />
              </ChakraBox>
            ))}
        </ChakraBox>
      ) : null}
    </>
  );
};
