import React, { useEffect, useState } from 'react';

import { Box } from '../../_nextGen/primitives';
import { LoadingRipple } from '../../_nextGen/animations';
import {
  useGalleryQuery,
  ParsedImageData,
  galleryQueryParser,
} from '../../_nextGen/imagery';
import { GalleryWrap } from '../../_nextGen/galleries';

import { SearchBox } from './SearchBox';

export type SortTypes = 'dateTaken' | 'alt';

const Gallery = () => {
  const [imagesSource, setImagesSource] = useState<ParsedImageData[]>();
  const [imageArray, setImageArray] = useState<ParsedImageData[]>();
  const [searchValue, setSearchValue] = useState<string>();
  const [sortType, setSortType] = useState<SortTypes>('dateTaken');
  const [sortDirection, setSortDirection] = useState(true);
  const [sorting, setSorting] = useState(false);
  const { galleryPicks } = useGalleryQuery();

  // Images initialisation  =====================
  useEffect(() => {
    const imageData = galleryQueryParser(galleryPicks);

    const sortedImages = imageData.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      return a.dateTaken > b.dateTaken ? -1 : 1;
    });
    setImageArray(sortedImages);
    setImagesSource(sortedImages);
  }, [galleryPicks]);

  // Sorting =====================
  useEffect(() => {
    // init: no images, no run
    if (!imageArray || !sorting) return;
    let sortedImages: ParsedImageData[] = [...imageArray].sort((a, b) => {
      if (a === b) {
        return 0;
      }
      if (sortDirection === true) {
        return a[sortType] > b[sortType] ? -1 : 1;
      } else {
        return a[sortType] < b[sortType] ? -1 : 1;
      }
    });
    setImageArray(sortedImages);
    setSorting(false);
  }, [sorting, imageArray, sortDirection, sortType]);

  const sortHandler = (e: React.MouseEvent<HTMLButtonElement>, type: SortTypes) => {
    setSorting(true);
    if (sortType === type) {
      setSortDirection(!sortDirection);
    } else {
      setSortDirection(false);
      setSortType(type);
    }
  };

  // "Search" Filter =====================
  useEffect(() => {
    // init, no filtering: return
    if (searchValue === null || searchValue === undefined || !imagesSource) return;

    // back to default state
    if (searchValue === '') {
      return setImageArray(imagesSource);
    }
    let filteredImages = [...imagesSource].filter(item =>
      item.alt.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setImageArray(filteredImages);
  }, [searchValue, imagesSource]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box p={['1rem', '2rem']}>
      <Box display={['none', 'block']}>
        <SearchBox
          searchHandler={searchHandler}
          searchValue={searchValue || ''}
          sortHandler={sortHandler}
          sortType={sortType}
          sortDirection={sortDirection}
        />
      </Box>
      {imageArray ? (
        <GalleryWrap
          galleryName="Portrait Gallery"
          galleryType="imagegrid"
          imageArray={imageArray}
        />
      ) : (
        <LoadingRipple />
      )}
    </Box>
  );
};

export default Gallery;
