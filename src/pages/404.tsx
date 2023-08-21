import React from 'react';

import HeroSection from '../_nextGen/hero/HeroSection';
import Seo from '../components/seo';
import Layout from '../components/layout';
import { BodyText } from '../_nextGen/typography/Text';
import { ContentBrace } from '../_nextGen/layout/ContentBrace';
import { useImageQuery, SingleImageQueryParser } from '../_nextGen/imagery';
import Footer from '../_nextGen/footer/Footer';
import { Background } from '../_nextGen/hero/Background';
import { LightHeader } from '../_nextGen/hero/LightHeader';
import { CopyStack } from '../_nextGen/layout';
import { Box } from '../_nextGen/primitives';

const NotFoundPage = () => {
  const { header2: jmh } = useImageQuery();
  const header2 = SingleImageQueryParser(jmh);

  return (
    <Layout page="404">
      <Box position="relative">
        <Background
          colors={[
            'rgba(4, 0, 255, 0.5)',
            'rgba(255, 162, 0, 0.3)',
            'rgba(243, 7, 255, 0.3)',
          ]}
        ></Background>
        <HeroSection imageData={header2}>
          <LightHeader>
            <span>404</span> page not found
          </LightHeader>
        </HeroSection>
        <ContentBrace mb={['0', '200px']}>
          <CopyStack>
            <BodyText>Sorry, that page was not recognised!</BodyText>
            <BodyText>
              Try one of the links in the navigation below, I know you'll love it.
            </BodyText>
          </CopyStack>
        </ContentBrace>
        <Footer />
      </Box>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Photography showcase: 404 - Not Found" />;
