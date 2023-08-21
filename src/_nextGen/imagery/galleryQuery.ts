import { useStaticQuery, graphql } from 'gatsby';

// TODO add `loading: "eager"` to hero images

export const useGalleryQuery = () => {
  const data = useStaticQuery(graphql`
    query galleryData {
      galleryPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "galleryPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      documentaryPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "documentaryPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      clubbingPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "clubbingPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      exhibitionPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "exhibitionPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      heroPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "heroPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      inSituPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "inSituPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      editPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "editPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      pollOptions: allFile(
        filter: {
          sourceInstanceName: { eq: "pollOptions" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      contextPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "contextPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      fitnessPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "fitnessPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      performerPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "performerPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      inspoPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "inspoPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      #dsfdfsd

      btsPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "btsPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      couplesPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "couplesPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      dragPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "dragPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      favPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "favPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      funPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "funPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      rangePicks: allFile(
        filter: {
          sourceInstanceName: { eq: "rangePicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      nowPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "nowPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      lvPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "lvPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
      headShotPicks: allFile(
        filter: {
          sourceInstanceName: { eq: "headShotPicks" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            ...getManyImages
          }
        }
      }
    }
    fragment getManyImages on File {
      relativePath
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 80)
        fields {
          exif {
            meta {
              dateTaken
            }
          }
        }
        resize {
          aspectRatio
        }
      }
    }
  `);
  return data;
};
