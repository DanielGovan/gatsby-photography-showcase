import React, { Suspense, useEffect, useState } from 'react';
import { Box, ListItem } from '@chakra-ui/react';

import { Flex } from '../_nextGen/primitives';
import Seo from '../components/seo';
import HeroSection from '../_nextGen/hero/HeroSection';

import Layout from '../components/layout';
import { BodyText, BodyHeader, SubHeader } from '../_nextGen/typography';
import { ContentBrace, CopyStack } from '../_nextGen/layout';
import { InlineLink } from '../_nextGen/link';
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
import { CopyList } from '../_nextGen/typography/Text';
import { TabPanel, TabPanels, Tabs } from '../_nextGen/tabs';

import { colorGrabber } from '.';

const colors = [
  'rgba(4, 0, 255, 0.5)',
  'rgba(255, 162, 0, 0.3)',
  'rgba(243, 7, 255, 0.3)',
];

const Commissions = ({ location }: { location: string }) => {
  const { header1: dh } = useImageQuery();
  const { btsPicks: btssrc, rangePicks: rsrc } = useGalleryQuery();
  const header1 = SingleImageQueryParser(dh);
  const btsPicks = galleryQueryParser(btssrc);
  const rangePicks = galleryQueryParser(rsrc);

  const [isClient, setClient] = useState(false);
  const CommissionForm = React.lazy(() => import('../_nextGen/forms/CommissionForm'));
  const isSSR = typeof window === 'undefined';

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <Layout page={location}>
      <Box position="relative">
        <Background colors={colors}></Background>
        <HeroSection imageData={header1} bgPosition="center 30%">
          <LightHeader>
            Hire me <span>now</span>!
          </LightHeader>
        </HeroSection>
        <Box pos="relative" zIndex="10">
          <ImageText images={rangePicks} zIndex="9" color={colorGrabber(colors, 0)}>
            <Box>
              <SubHeader>Lorem, ipsum dolor.</SubHeader>
              <CopyList>
                <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                <ListItem>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
                  dicta possimus mollitia.
                </ListItem>
              </CopyList>
            </Box>
            <Box>
              <SubHeader mt="1rem" mb="0.5rem">
                Lorem, ipsum dolor.
              </SubHeader>
              <BodyText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quam facere
                libero nesciunt veritatis ab, vero molestias odit consequuntur nostrum
                magni nam exercitationem corporis error minima in doloribus doloremque
                aliquid nulla dolore voluptatum commodi asperiores veniam necessitatibus?
                Consequuntur dicta doloribus dolor, illum eos nostrum totam alias rem
                officia ab delectus?
              </BodyText>
            </Box>
          </ImageText>

          <ImageText
            images={btsPicks}
            flipHor={true}
            my="5rem"
            color={colorGrabber(colors, 1)}
          >
            <SubHeader>Lorem ipsum dolor sit.</SubHeader>
            <BodyText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quod ipsam
              recusandae illo totam ipsa est pariatur laborum repudiandae rem? Inventore
              praesentium nemo tempora totam iusto officia dolores esse eaque iure
              consequatur possimus, mollitia accusamus alias, voluptates ipsa, vero
              expedita incidunt non debitis cumque magni voluptatem reiciendis nisi. Quae,
              consequuntur.
            </BodyText>{' '}
          </ImageText>

          <ContentBrace my="5rem">
            <CopyStack color={colorGrabber(colors, 2)}>
              <BodyHeader>Lorem ipsum:</BodyHeader>
              <Tabs
                mt="2rem"
                mb="4rem"
                isFitted
                titles={['Option1', 'Option2', 'Option3']}
              >
                <TabPanels>
                  <TabPanel flexDirection={['column', 'row']}>
                    <Flex
                      justifyContent="space-between"
                      flexDirection={['column', 'row']}
                      gap={[4, 8]}
                      my={[4, 8]}
                    >
                      <Box flexBasis="50%">
                        <BodyText>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                          tempore eveniet ipsa repudiandae ab incidunt inventore
                          doloremque.
                        </BodyText>
                      </Box>
                      <CopyList>
                        <ListItem>Lorem, ipsum.</ListItem>
                        <ListItem>Lorem, ipsum dolor.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                        <ListItem>Lorem, ipsum.</ListItem>
                        <ListItem>Lorem, ipsum dolor.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                      </CopyList>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Flex
                      justifyContent="space-between"
                      flexDirection={['column', 'row']}
                      gap={[4, 8]}
                      my={[4, 8]}
                    >
                      <Box flexBasis="50%">
                        <BodyText>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                          dignissimos itaque eligendi odit reprehenderit minus facilis
                          voluptatum, aperiam, quia perferendis eius cum autem officia
                          veritatis voluptate nihil velit.
                        </BodyText>
                      </Box>
                      <CopyList>
                        <ListItem>Lorem, ipsum.</ListItem>
                        <ListItem>Lorem, ipsum dolor.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                        <ListItem>Lorem, ipsum.</ListItem>
                        <ListItem>Lorem, ipsum dolor.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                      </CopyList>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Flex
                      justifyContent="space-between"
                      flexDirection={['column', 'row']}
                      gap={[4, 8]}
                      my={[4, 8]}
                    >
                      <Box flexBasis="50%">
                        <BodyText>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                          tempore id aspernatur eaque eveniet ad tenetur aut ea, modi ab
                          totam iste.
                        </BodyText>
                      </Box>
                      <CopyList>
                        <ListItem>Lorem, ipsum.</ListItem>
                        <ListItem>Lorem, ipsum dolor.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                        <ListItem>Lorem, ipsum.</ListItem>
                        <ListItem>Lorem, ipsum dolor.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                      </CopyList>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </CopyStack>
          </ContentBrace>

          <Box my={['3rem', '5rem']} mb={['3rem', '15rem']}>
            {!isSSR && isClient && (
              <Suspense fallback={<div>Loading...</div>}>
                <CopyStack maxW="800px" mx="auto" color={colorGrabber(colors, 2)}>
                  <BodyText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    aliquam, corrupti laborum molestias cupiditate eveniet veniam eaque
                    accusantium temporibus, sint eligendi sequi ullam sit! Rerum debitis
                    aliquid mollitia esse molestiae obcaecati odio harum ipsa vitae
                    tenetur non, dolorum eligendi ex.
                  </BodyText>
                  <CommissionForm />
                </CopyStack>
              </Suspense>
            )}
          </Box>
          <Footer />
        </Box>
      </Box>
    </Layout>
  );
};

export default Commissions;

export const Head = () => <Seo title="Photography showcase: Get lit by dan" />;
