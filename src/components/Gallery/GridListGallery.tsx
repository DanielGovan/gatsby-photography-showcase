import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { TfiLayoutColumn2, TfiLayoutGrid3 } from 'react-icons/tfi';

import { Button } from '../../_nextGen/button';
import { Box } from '../../_nextGen/primitives';
import { ImageWrap, ParsedImageData } from '../../_nextGen/imagery';

// This is going to need a lot of refactoring

type GalleryHeaderProps = {
  toggleView: (view: boolean) => void;
  view: boolean;
};

const GalleryHeader = ({ view, toggleView }: GalleryHeaderProps) => {
  return (
    <Box>
      <Button
        variant="unstyled"
        onClick={() => toggleView(!view)}
        zIndex="999"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="auto"
        fontSize="2rem"
        borderRadius="0"
        pos="absolute"
        top="1rem"
        left="1rem"
        border="solid 2px white"
        color="white"
        sx={{ '&:hover': { background: 'white', color: 'black' } }}
      >
        {view ? <TfiLayoutColumn2 /> : <TfiLayoutGrid3 />}
      </Button>
    </Box>
  );
};

const ImageLink = (props: ParsedImageData) => {
  return (
    <motion.div
      // layoutId={props.fileName}
      transition={{ duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <ImageWrap imageData={props} />
    </motion.div>
  );
};

export const GridListGallery = ({ imageArray }: { imageArray: ParsedImageData[] }) => {
  const [gridVisible, setGridVisble] = useState(false);
  return (
    <Box
      position="relative"
      width="100vw"
      height="calc(1vh*100)"
      overflow="hidden"
      transition="all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)"
      sx={{ contentVisibility: 'auto' }}
    >
      <GalleryHeader view={gridVisible} toggleView={setGridVisble} />
      {gridVisible && (
        <Box
          className="grid-container"
          display="flex"
          alignItems="center"
          justifyContent="center"
          pos="absolute"
          // should these be relative?? this is v un mobile lol
          // height="1600px"
          // top="calc(((1vh*100)-1600px) /2)"
          // width="2110px"
          // left="calc(((100vw-2110px) /2)"
          height="calc(var(--vh, 1vh) * 120)"
          top="calc(var(--vh, 1vh) * -10)"
          // top="calc(((1vh*100)-1600px) /2)"
          width="calc(var(--vh, 1vh) * 120)"
          left="calc(var(--vh, 1vh) * -10)"
          // left="calc(((100vw-2110px) /2)"
          sx={{ contentVisibility: 'auto' }}
        >
          <Box
            className="grid-items"
            display="grid"
            gridTemplateColumns="repeat(16, 120px)"
            // gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))"
          >
            {imageArray.map(({ image, alt, dateTaken, humanDate, fileName }, i) => {
              return (
                <Box className="element" py="32px" px="46px" width="200px" height="120px">
                  <Box className="thumbnail-wrapper" h="100%" w="100%" pos="relative">
                    <ImageLink
                      fileName={fileName}
                      image={image}
                      alt={alt}
                      dateTaken={dateTaken}
                      humanDate={humanDate}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
      {!gridVisible && (
        <Box
          className="list-items"
          overflowX="auto"
          overflowY="hidden"
          height="calc(1vh*100)"
          display="grid"
          gridTemplateColumns="repeat(200, 1fr)" // how to make this dynamic / auto
          alignItems="center"
          py="0"
          px="10vmin"
        >
          {imageArray.map(({ image, alt, dateTaken, humanDate, fileName }, i) => {
            return (
              <Box className="element" width="70vmin" height="70vmin" my="0" mx="5vw">
                <ImageLink
                  fileName={fileName}
                  image={image}
                  alt={alt}
                  dateTaken={dateTaken}
                  humanDate={humanDate}
                />
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
