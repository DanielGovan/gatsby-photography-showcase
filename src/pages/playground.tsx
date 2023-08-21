import React, { Suspense, useEffect, useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import {
  Checkbox,
  FormLabel,
  Grid,
  Input,
  Progress,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

import Seo from '../components/seo';
import { ContentBrace } from '../_nextGen/layout/ContentBrace';
import { CopyStack } from '../_nextGen/layout';

import { Button } from '../_nextGen/button';
import { Box, ButtonGroup, Flex } from '../_nextGen/primitives';
import { BodyHeader, BodyText, HeroHeader } from '../_nextGen/typography';
import { Background } from '../_nextGen/hero/Background';
import { TabPanel, TabPanels, Tabs } from '../_nextGen/tabs';
import { flameShadow, iceShadow } from '../_nextGen/button/buttonStyles';

import { ChakraBox } from '../_nextGen/animations';
import { GalleryWrap } from '../_nextGen/galleries';
import { galleryQueryParser, useGalleryQuery } from '../_nextGen/imagery';
import { GlassBox } from '../_nextGen/components/GlassBox';

import { textGlow } from '.';

const NotFoundPage = () => {
  const { clubbingPicks: fpsrc } = useGalleryQuery();
  const clubbingPicks = galleryQueryParser(fpsrc);

  const [isClient, setClient] = useState(false);
  const PollForm = React.lazy(() => import('../_nextGen/forms/PollForm'));
  const isSSR = typeof window === 'undefined';

  const { funPicks: cpsrc } = useGalleryQuery();
  const funPicks = galleryQueryParser(cpsrc);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      <Background
        colors={[
          'rgba(4, 0, 255, 0.5)',
          'rgba(255, 162, 0, 0.3)',
          'rgba(243, 7, 255, 0.3)',
        ]}
      ></Background>
      <Box pos="relative" zIndex="10">
        <ContentBrace>
          <CopyStack maxW="800px" mx="auto">
            <BodyText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis tenetur
              exercitationem ad amet perferendis atque vero adipisci magnam cum, aut
              aperiam non unde. Praesentium incidunt natus esse quod id culpa modi
              reprehenderit alias quasi possimus harum expedita, beatae ea explicabo.
            </BodyText>
          </CopyStack>
          <Box my="5rem">
            {!isSSR && isClient && (
              <Suspense fallback={<div>Loading...</div>}>
                <GlassBox
                  p={['1rem', '2rem']}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <PollForm />
                </GlassBox>
              </Suspense>
            )}
          </Box>
        </ContentBrace>
        <Box
          minH={'calc(100vh)'}
          display="flex"
          flexDirection={['column', 'column', 'row']}
          mb={['2rem', '10rem']}
        >
          <Box flexBasis={'38%'} alignItems="center">
            <Box
              display="flex"
              justifyContent={'flex-end'}
              pos="sticky"
              transform="translate( 0, -50%,)"
              mx={['.5rem', '4rem']}
              my={['0', '5vh']}
              minH={['0', '0', 'calc(var(--vh, 1vh) * 100)']}
              top="0"
              bottom="0"
              alignItems="center"
            >
              <CopyStack maxW={['none', 'none', '555px']}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, sint.
                Reprehenderit voluptatibus exercitationem, nesciunt dolore esse magnam
                modi ducimus culpa reiciendis omnis, nisi fugiat eius tempora provident
                quas quisquam doloribus!
              </CopyStack>
            </Box>
          </Box>
          <ChakraBox
            flexBasis={'61.8%'}
            py={['0', '35vw']}
            maxH={['none', '400vh', 'none']}
            overflow="hidden"
          >
            {clubbingPicks && (
              <GalleryWrap galleryType="imagelayout" imageArray={clubbingPicks} />
            )}
          </ChakraBox>
        </Box>
        <ContentBrace py="200px">
          <BodyHeader>Buttons</BodyHeader>
          <CopyStack my="5rem">
            <ButtonGroup>
              <Button variant="outline" sx={{}}>
                Hover for outer glow
              </Button>
              <Button variant="fire" sx={{}}>
                Hover for double glow
              </Button>
              <Button variant="ice" sx={{}}>
                Hover for double glow
              </Button>
              <Button variant="glow" sx={{}}>
                Hover for moving glow, then click
              </Button>
            </ButtonGroup>
            <Box boxShadow={iceShadow}>ice</Box>
            <Box boxShadow={flameShadow}>flame</Box>
            <ButtonGroup>
              <Button
                onClick={() => {}}
                variant="icon"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaChevronCircleLeft size={32} />
              </Button>
              <Button
                onClick={() => {}}
                textAlign="right"
                variant="iconGlow"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaChevronCircleRight size={32} />
              </Button>
            </ButtonGroup>
            <Box maxW={'500px'}>
              <Flex gap="1em" mb="1em">
                <Box>
                  <Checkbox></Checkbox>
                </Box>
                <Box sx={{ color: 'error.600' }}>
                  <Checkbox isInvalid={true}></Checkbox>
                </Box>
              </Flex>
              <Flex gap="1em">
                <Box>
                  <Checkbox defaultChecked></Checkbox>
                </Box>
                <Box sx={{ color: 'error.600' }}>
                  <Checkbox defaultChecked isInvalid={true}></Checkbox>
                </Box>
              </Flex>
            </Box>
            <RadioGroup maxW="100px" defaultValue="3">
              <Grid templateColumns="repeat(2, 1fr)" gap="4">
                <Radio value="1"></Radio>
                <Radio isInvalid={true} value="2"></Radio>
                <Radio defaultChecked value="3"></Radio>
                <Radio defaultChecked isInvalid={true} value="3"></Radio>
              </Grid>
            </RadioGroup>
            <Tabs variant="selector-button" titles={['Button text', '2nd', 'Third']}>
              <TabPanels>
                <TabPanel>
                  <p>First tab!</p>
                </TabPanel>
                <TabPanel>
                  <p>Second tab!</p>
                </TabPanel>
                <TabPanel>
                  <p>Third tab!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Progress value={40} />
          </CopyStack>
          <CopyStack maxW="500px">
            <Flex gap="1em" mb="1em">
              <Box>
                <FormLabel variant="mandatory">Mandatory form label</FormLabel>
                <Input id="first-name" placeholder="Prompt text" />
              </Box>
              <Box sx={{ color: 'error.600' }}>
                <FormLabel variant="mandatory">Mandatory form label</FormLabel>
                <Input placeholder="Prompt text" isInvalid={true} />
              </Box>
            </Flex>
            <Flex gap="1em">
              <Box>
                <FormLabel>Form label</FormLabel>
                <Input
                  placeholder="Prompt text"
                  value="Entered text"
                  onChange={() => {}}
                />
              </Box>
              <Box sx={{ color: 'error.600' }}>
                <FormLabel>Form label</FormLabel>
                <Input
                  placeholder="Prompt text"
                  value="Entered text"
                  onChange={() => {}}
                  isInvalid={true}
                />
              </Box>
            </Flex>

            <Flex gap="1em" flexDirection="column">
              <Input variant="outline" placeholder="outline" />
              <Input variant="filled" placeholder="Filled" />
            </Flex>
          </CopyStack>
        </ContentBrace>
        <ContentBrace>
          <BodyHeader>Headings</BodyHeader>
          <CopyStack my="5rem">
            <HeroHeader
              sx={{
                fontSize: '5rem',
                color: '#ccc',
                fontWeight: '300 !important',
                span: {
                  color: '#fff',
                  fontWeight: '700 !important',
                  animation: `${textGlow} 12s linear infinite`,
                  textShadow:
                    '0 0 20px #0072ff, 0 0 40px #0072ff, 0 0 80px #0072ff, 0 0 160px #0072ff, 0 0 320px #0072ff ,0 0 20px #0072ff, 0 0 40px #0072ff, 0 0 80px #0072ff, 0 0 160px #0072ff, 0 0 320px #0072ff',
                },
              }}
            >
              Photography <span>showcase</span>
            </HeroHeader>
          </CopyStack>
        </ContentBrace>
      </Box>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Photography showcase: 404 - Not Found" />;
