import React, { Suspense, useEffect, useState } from 'react';

import { Icon } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import HeroSection from '../_nextGen/hero/HeroSection';
import Seo from '../components/seo';
import Layout from '../components/layout';
import { BodyText } from '../_nextGen/typography/Text';
import { Box, ButtonGroup } from '../_nextGen/primitives';
import { ContentBrace } from '../_nextGen/layout/ContentBrace';
import { LightHeader } from '../_nextGen/hero/LightHeader';

import { SingleImageQueryParser, useImageQuery } from '../_nextGen/imagery';
import { Background } from '../_nextGen/hero/Background';
import { CopyStack } from '../_nextGen/layout';
import { Button } from '../_nextGen/button';

import { colorGrabber } from '.';
const colors = [
  'rgba(248, 41, 0, 0.3)',
  'rgba(226, 226, 0, 0.3)',
  'rgba(0, 255, 51, 0.2)',
];

const Polls = ({ location }: { location: string }) => {
  const { header2: kh } = useImageQuery();
  const header2 = SingleImageQueryParser(kh);

  const [isClient, setClient] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const PollForm = React.lazy(() => import('../_nextGen/forms/PollForm'));
  const isSSR = typeof window === 'undefined';

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <Layout page={location}>
      <Box position="relative">
        <Background colors={colors}></Background>

        {!isStarted && (
          <HeroSection imageData={header2}>
            <LightHeader>
              Lorem ipsume <span>dolor!</span>
            </LightHeader>
          </HeroSection>
        )}
        <Box pos="relative" zIndex="10">
          <ContentBrace>
            <Box pt={['2rem', '3rem']} pb={['4rem', '6rem']}>
              {!isSSR && isClient && (
                <Suspense fallback={<div>Loading...</div>}>
                  {isStarted ? (
                    <CopyStack maxW="800px" mx="auto" color={colorGrabber(colors, 3)}>
                      <PollForm />
                    </CopyStack>
                  ) : (
                    <CopyStack
                      maxW="800px"
                      mx="auto"
                      color={colorGrabber(colors, 1)}
                      textAlign="left"
                    >
                      <BodyText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur vel non nostrum sint voluptatem, facere sunt tempora
                        suscipit ad quod illo corporis laborum laudantium repudiandae?
                        Quae, odit adipisci! Accusamus quidem dolor aut?
                      </BodyText>
                      <ButtonGroup
                        height="3rem"
                        gap="3rem"
                        display="flex"
                        width="100%"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Button
                          textAlign="center"
                          onClick={() => {
                            setIsStarted(true);
                          }}
                        >
                          Lets begin! <Icon as={FaChevronRight} />
                        </Button>
                      </ButtonGroup>
                    </CopyStack>
                  )}
                </Suspense>
              )}
            </Box>
          </ContentBrace>
        </Box>
      </Box>
    </Layout>
  );
};

export default Polls;

export const Head = () => <Seo title="Photography showcase: Q & A" />;

//  That said I my shoots are quite involved and I only have time to do about a couple a month.
//
// Still, it can be months (or years!) between "hey I'd love to shoot with you"
// and actually doing it so if your needs are more urgent (and if you're
// financially able) do consider{' '}
// <InternalLink target="/commissions/">a commission</InternalLink>. Maybe it's
// my ADHD talking but the clarity of someone else setting the goals is so
// freeing!

// Or maybe you just like filling in forms?? Well you're in luck!

// I shoot every skintone and a bunch of body types, but mostly on the male side of the spectrum.
// this whole bit should be a FAQ!

// This bit should be in a side panel or pop up or something? I'm over explaining.
// Instead of talking about myself I should be talking about the kinds of people

// I like to collab with. Be positive! Be excited!

// I'm hoping this will take some of the admin out of collabs because as an ADHD
// introvert, organising them can be a mess! I'll be too nervous to approach
// people, anxious about those I don't know, or worried about them flaking... Or I
// can be really excited about a shoot with whole plans written up, but then get
// busy for a couple weeks and just ...forget. Even if things go well it's months
// or years between "hey I'd love to shoot with you" and actually doing it!

// There's usually a few reasons why I shoot with someone, because there's a bunch of
// reasons not to: What if we can't find a time that works for both of us? What if
// they're looking for different things than I can give? What if they're weird?
// What if I am?!

// Don’t want to wait to be contacted for a collaboration? Have your own project in
// mind? Ask me about my rates and hire me so we can create the images you want
