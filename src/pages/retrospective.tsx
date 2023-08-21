import React from 'react';

import HeroSection from '../_nextGen/hero/HeroSection';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { BodyText, BodyHeader } from '../_nextGen/typography';
import { ImageText } from '../_nextGen/layout/ImageText';
import {
  useImageQuery,
  useGalleryQuery,
  galleryQueryParser,
  SingleImageQueryParser,
} from '../_nextGen/imagery';
import { LightHeader } from '../_nextGen/hero/LightHeader';
import { Background } from '../_nextGen/hero/Background';
import Footer from '../_nextGen/footer/Footer';
import { Box } from '../_nextGen/primitives';

import { colorGrabber } from '.';

const colors = [
  'rgba(236, 151, 5, 0.3)',
  'rgba(106, 0, 188, 0.5)',
  'rgba(235, 37, 245, 0.3)',
];

const Retrospective = ({ location }: { location: string }) => {
  const { header5: yh } = useImageQuery();
  const header5 = SingleImageQueryParser(yh);
  const {
    clubbingPicks: cpsrc,
    inspoPicks: qpsrc,
    performerPicks: opsrc,
    inSituPicks: ipsrc,
    documentaryPicks: bssrc,
  } = useGalleryQuery();

  const clubbingPicks = galleryQueryParser(cpsrc);
  const inspoPicks = galleryQueryParser(qpsrc);
  const performerPicks = galleryQueryParser(opsrc);
  const inSituPicks = galleryQueryParser(ipsrc);
  const documentaryPicks = galleryQueryParser(bssrc);

  return (
    <Layout page={location}>
      <Box position="relative">
        <Background colors={colors}></Background>
        <HeroSection imageData={header5}>
          <LightHeader>
            The <span>story</span> so far
          </LightHeader>
        </HeroSection>
        <Box pos="relative" zIndex="10">
          <ImageText images={clubbingPicks} my="5rem" color={colorGrabber(colors, 0)}>
            <BodyHeader>Part one</BodyHeader>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit excepturi
              architecto obcaecati saepe quos doloribus eos vitae nam molestiae.
            </BodyText>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi eaque
              laborum in sapiente repudiandae optio voluptas, maxime voluptate
              voluptatibus blanditiis animi iusto consequatur ea perferendis aliquid
              nesciunt pariatur odit.
            </BodyText>
          </ImageText>
          <ImageText
            images={performerPicks}
            my="5rem"
            flipHor={true}
            color={colorGrabber(colors, 1)}
          >
            <BodyHeader>Part two</BodyHeader>
            <BodyText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi odio
              sed ullam assumenda quod repellat aut autem consequuntur quia quo quasi
              voluptatum, nihil similique dicta. Nam, aut obcaecati. Neque quaerat
              consequuntur, facere deserunt omnis quas aspernatur nulla consectetur,
              voluptas nobis, vero dolores animi dicta dolore? Odio nam nesciunt sit!
            </BodyText>
            <BodyText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde a corporis
              libero sit aperiam quibusdam dolorum sequi doloremque et id?
            </BodyText>
          </ImageText>

          <ImageText images={documentaryPicks} my="5rem" color={colorGrabber(colors, 2)}>
            <BodyHeader>Part three</BodyHeader>
            <BodyText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus
              nostrum cumque, voluptate nihil est eligendi. Iste atque provident in ex
              fugiat quas, eos pariatur cum aperiam dolorum itaque repellendus est
              voluptates nobis magni dolor accusantium fuga quam sed illum deserunt non
              quisquam? Voluptate, neque!
            </BodyText>
          </ImageText>

          <ImageText
            images={inSituPicks}
            my="5rem"
            flipHor={true}
            color={colorGrabber(colors, 3)}
          >
            <BodyHeader>Part four</BodyHeader>
            <BodyText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur eos
              obcaecati libero ea sed esse hic doloremque sint asperiores culpa, excepturi
              repudiandae. Quo, iste beatae.
            </BodyText>
          </ImageText>

          <ImageText images={inspoPicks} my="5rem" color={colorGrabber(colors, 4)}>
            <BodyHeader>Part five</BodyHeader>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore odio cumque
              tempora esse adipisci vel nihil numquam similique, dolores quam, et sunt ut
              nam ab quae omnis, tenetur obcaecati dolorum repellendus ea cupiditate?
            </BodyText>
          </ImageText>

          <Footer />
        </Box>
      </Box>
    </Layout>
  );
};

export default Retrospective;

export const Head = () => <Seo title="Photography showcase: Retrospective" />;
