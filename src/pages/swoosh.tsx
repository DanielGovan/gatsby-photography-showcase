import React, { useEffect, useState } from 'react';

import { GridListGallery } from '../components/Gallery/GridListGallery';
import {
  useGalleryQuery,
  ParsedImageData,
  galleryQueryParser,
} from '../_nextGen/imagery';

const Gallery = () => {
  const [imageArray, setImageArray] = useState<ParsedImageData[]>();
  const { galleryPicks } = useGalleryQuery();

  useEffect(() => {
    const imageData = galleryQueryParser(galleryPicks);

    const sortedImages = imageData.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      return a.dateTaken > b.dateTaken ? -1 : 1;
    });
    setImageArray(sortedImages);
  }, [galleryPicks]);

  return <>{imageArray && <GridListGallery imageArray={imageArray} />}</>;
};

export default Gallery;
