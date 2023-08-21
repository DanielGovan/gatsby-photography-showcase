import React from 'react';

import HeroSection from '../_nextGen/hero/HeroSection';
import Seo from '../components/seo';
import Layout from '../components/layout';
import { BodyText } from '../_nextGen/typography/Text';
import { IntroText } from '../_nextGen/typography/';
import { Box } from '../_nextGen/primitives';
import { ContentBrace } from '../_nextGen/layout/ContentBrace';
import { ImageText } from '../_nextGen/layout/ImageText';
import { LightHeader } from '../_nextGen/hero/LightHeader';

import {
  useGalleryQuery,
  galleryQueryParser,
  SingleImageQueryParser,
  useImageQuery,
} from '../_nextGen/imagery';
import { Background } from '../_nextGen/hero/Background';
import Footer from '../_nextGen/footer/Footer';
import { CopyStack } from '../_nextGen/layout';

import { colorGrabber } from '.';

const colors = [
  'rgba(255, 234, 0, 0.3)',
  'rgba(82, 67, 32, 0.5)',
  'rgba(248, 108, 0, 0.3)',
];

const Applications = ({ location }: { location: string }) => {
  const { header3: ph } = useImageQuery();
  const header3 = SingleImageQueryParser(ph);
  const { funPicks: cpsrc } = useGalleryQuery();
  const funPicks = galleryQueryParser(cpsrc);

  return (
    <Layout page={location}>
      <Box position="relative">
        <Background colors={colors}></Background>

        <HeroSection imageData={header3}>
          <LightHeader>
            Lorem ipsum <span>dolor</span>
          </LightHeader>
        </HeroSection>
        <Box pos="relative" zIndex="10">
          <ImageText images={funPicks} my="0rem" color={colorGrabber(colors, 0)}>
            <IntroText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, ullam, alias
              officiis, est corrupti illum sequi repellat explicabo laudantium distinctio
              voluptate animi in! Eos.
            </IntroText>
            <BodyText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt at natus
              voluptatibus et harum voluptatum similique! Nobis debitis ut, cupiditate
              labore sint porro quas, facere blanditiis amet consequatur nam, corrupti
              officia fugit.
            </BodyText>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ab
              sapiente voluptatem voluptates iusto cumque quis a illum rerum placeat
              facere accusantium enim, est vel doloribus voluptatibus aut optio?
            </BodyText>
          </ImageText>
          <ContentBrace>
            <CopyStack
              maxW="800px"
              mx="auto"
              color={colorGrabber(colors, 0)}
              mb={['2rem', '10rem']}
            >
              <BodyText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint
                voluptates modi doloribus repellat nesciunt placeat rerum a explicabo
                nisi. Nobis nisi dicta aspernatur beatae est quia, quaerat ducimus rem
                dolore alias nam enim a? Quisquam, officia voluptas. Consectetur,
                similique?
              </BodyText>
            </CopyStack>
          </ContentBrace>

          <Footer />
        </Box>
      </Box>
    </Layout>
  );
};

export default Applications;

export const Head = () => <Seo title="Photography showcase: About collabs" />;
