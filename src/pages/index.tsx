import React from 'react';
import { keyframes } from '@emotion/react';

import Seo from '../components/seo';
import HeroSection from '../_nextGen/hero/HeroSection';
import Layout from '../components/layout';
import { BodyText, IntroText } from '../_nextGen/typography';
import { ContentBrace, CopyStack, FullHeight } from '../_nextGen/layout';

import {
  useImageQuery,
  useGalleryQuery,
  galleryQueryParser,
  SingleImageQueryParser,
} from '../_nextGen/imagery';
import { ImageText } from '../_nextGen/layout/ImageText';
import { Background } from '../_nextGen/hero/Background';
import { LightHeader } from '../_nextGen/hero/LightHeader';
import Footer from '../_nextGen/footer/Footer';
import { Box } from '../_nextGen/primitives';
import { InlineLink } from '../_nextGen/link';

export const textGlow = keyframes`
from {
  filter: hue-rotate(0deg);
}
to {
  filter: hue-rotate(360deg);
}
`;

const colors = [
  'rgba(199, 65, 207, 0.2)',
  'rgba(34, 0, 188, 0.2)',
  'rgba(245, 168, 37, 0.2)',
];

export const colorGrabber = (colors: string[], number: number) => {
  const pick = colors[number % colors.length];
  return pick;
};

// console.log(colorGrabber(colors, 0));
const IndexPage = ({ location }: { location: string }) => {
  const { favPicks: fpsrc } = useGalleryQuery();
  const favPicks = galleryQueryParser(fpsrc);

  const { header4: kh } = useImageQuery();
  // const melol = SingleImageQueryParser(ml);
  const header4 = SingleImageQueryParser(kh);

  return (
    <Layout page={location}>
      <Box position="relative">
        <Background colors={colors}></Background>

        <HeroSection imageData={header4}>
          <LightHeader>
            Photography <span>showcase</span>
          </LightHeader>
        </HeroSection>
        <Box pos="relative" zIndex="10">
          <FullHeight>
            <ImageText images={favPicks} my="5rem" color={colorGrabber(colors, 0)}>
              <IntroText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sequi
                delectus! Velit a quod ipsa.
              </IntroText>
              <BodyText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
                laboriosam ipsam aspernatur voluptatum iure, molestias ut, animi
                perferendis, ea nemo soluta. Exercitationem saepe cupiditate nobis.
              </BodyText>
              <BodyText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
                aut? Dolorum porro, a quis molestias officiis quod natus inventore numquam
                repellendus consequatur rerum. Reprehenderit eaque vitae hic nihil
                nesciunt magni ducimus voluptas illo quia quas?
              </BodyText>
            </ImageText>
          </FullHeight>
          <Footer />
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Photography showcase: Home" />;
