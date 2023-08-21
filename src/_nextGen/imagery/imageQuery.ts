import { useStaticQuery, graphql } from 'gatsby';

export const useImageQuery = () => {
  const data = useStaticQuery(graphql`
    query imageData {
      # Heros
      header1: file(relativePath: { eq: "header1.jpg" }) {
        ...heroImageData
      }
      header2: file(relativePath: { eq: "header2.jpg" }) {
        ...heroImageData
      }
      header3: file(relativePath: { eq: "header3.jpg" }) {
        ...heroImageData
      }
      header4: file(relativePath: { eq: "header4.jpg" }) {
        ...heroImageData
      }
      header5: file(relativePath: { eq: "header5.jpg" }) {
        ...heroImageData
      }
    }

    fragment getImage on File {
      relativePath
      childImageSharp {
        gatsbyImageData
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

    fragment heroImageData on File {
      relativePath
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
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
