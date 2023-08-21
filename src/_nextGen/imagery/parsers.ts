import { IGatsbyImageData } from 'gatsby-plugin-image';

import { ParsedImageData } from './ImageWrap';

type SingleImageQueryData = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
    fields: { exif: { meta: { dateTaken: string } } };
    resize: { aspectRatio: number };
  };
  relativePath: string;
};

type ImageQueryData = {
  node: SingleImageQueryData;
};

type GalleryQueryData = {
  edges: ImageQueryData[];
};

const dateParser = (date: any) => {
  let humanDate = '0';
  if (typeof date === 'string') {
    const parts = date && new Date(date).toDateString().split(' ');
    humanDate = `${parts[1]} ${parts[3]}`;
  }
  return humanDate;
};

export const SingleImageQueryParser = (item: SingleImageQueryData) => {
  const image = item.childImageSharp.gatsbyImageData;
  const dateTaken = item.childImageSharp.fields?.exif.meta.dateTaken || '';
  const humanDate = dateTaken ? dateParser(dateTaken) : '';
  const fileName = item.relativePath;
  const aspectRatio = item.childImageSharp.resize.aspectRatio;
  const alt = fileName
    .split('-')[0]
    .replace('.jpg', '')
    .replace('_', ' ')
    .replace('_', ' ')
    .replace('_', ' ')
    .replace('_', ' ');
  return { image, dateTaken, humanDate, alt, fileName, aspectRatio };
};

const ImageQueryParser = (item: ImageQueryData) => {
  const image = item.node.childImageSharp.gatsbyImageData;
  const dateTaken = item.node.childImageSharp.fields?.exif.meta.dateTaken || '';
  const humanDate = dateTaken ? dateParser(dateTaken) : '';
  const fileName = item.node.relativePath;
  const alt = fileName
    .split('-')[0]
    .replace('.jpg', '')
    .replace('_', ' ')
    .replace('_', ' ')
    .replace('_', ' ')
    .replace('_', ' ');
  const aspectRatio = item.node.childImageSharp.resize.aspectRatio;

  return { image, dateTaken, humanDate, alt, fileName, aspectRatio };
};

export const galleryQueryParser = (data: GalleryQueryData) => {
  let imageArray: ParsedImageData[] = [];
  for (const item of data.edges) {
    imageArray.push(ImageQueryParser(item));
  }

  return imageArray;
};
