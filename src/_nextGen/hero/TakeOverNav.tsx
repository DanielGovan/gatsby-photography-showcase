import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { Box, Flex } from '../primitives';
import { NavLink } from '../link';
import { ChakraBox } from '../animations';
import { SocialLink } from '../footer/SocialLink';

import { MenuToggle } from './MenuToggle';

const tDuration = 1;
const itemDuration = 0.3;

const menuAnimate = {
  hide: { opacity: [1, 0], transition: { duration: tDuration } },
  show: { opacity: [0, 1], transition: { duration: tDuration } },
};

const navWrapAnim = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: itemDuration,
    },
  },
};

const navItemAnim = {
  hide: { opacity: 0, x: -200 },
  show: {
    opacity: [0, 1],
    x: [-200, 0],
    transition: {
      duration: itemDuration,
    },
  },
};

const socialsItemAnim = {
  hide: { opacity: 0, y: -200 },
  show: {
    opacity: [0, 1],
    y: [-200, 0],
    transition: {
      duration: itemDuration,
    },
  },
  hover: {
    scale: 1.2,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.9 },
};

// TODO Make a reusable list and listitem stagger animation
// Make nav list from an object instead of markup??

export const TakeOverNav = ({ page }: { page: any }) => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  useEffect(() => {
    if (navIsVisible) {
      document.documentElement.style.setProperty('overflow', `hidden`);
    } else {
      document.documentElement.style.removeProperty('overflow');
    }
  }, [navIsVisible]);

  return (
    <>
      <Box
        zIndex="99999"
        position="fixed"
        top={['1rem', '2rem', '3rem']}
        left={['1rem', '2rem', '3rem']}
      >
        <MenuToggle
          navIsVisible={navIsVisible}
          setNavIsVisible={setNavIsVisible}
          zIndex="1"
        />
      </Box>
      <AnimatePresence mode="wait">
        {navIsVisible && (
          // Background area
          <ChakraBox
            variants={menuAnimate}
            initial="hide"
            animate="show"
            exit="hide"
            zIndex="9999"
            backdropFilter={['none', 'blur(30px) saturate(150%) brightness(0.5)']}
            bg={['rgba(0,0,0,0.9)', 'none']}
            h="calc(var(--vh, 1vh) * 100)"
            w="100vw"
            position="fixed"
            inset="0"
            display="flex"
            flexDirection="column-reverse"
            justifyContent="flex-end"
            alignItems="flex-start"
            pl={['1rem', '6rem', '7rem']}
            pt={['1rem', '0rem', '3rem']}
          >
            {
              // Socials list
            }
            <ChakraBox
              mt={['3rem', '2rem']}
              fontSize={['2rem', '3.5rem']}
              zIndex="99"
              pl="0.5rem"
              // bg="rgba(255,0,0, 0.2)"
              variants={navWrapAnim}
            >
              {!(page.pathname === '/') && (
                <motion.div variants={navItemAnim}>
                  <NavLink i={0} target="/">
                    Home
                  </NavLink>
                </motion.div>
              )}

              {!(page.pathname === '/commissions/') && (
                <motion.div variants={navItemAnim}>
                  <NavLink i={1} target="/commissions/">
                    Commissions
                  </NavLink>
                  {/* <NavLink variant="sublink" i={1} target="/shoottypes/">
                    - Shoot types
                  </NavLink>
                  <NavLink variant="sublink" i={1} target="/testimonials/">
                    - Testimonials
                  </NavLink> */}
                </motion.div>
              )}
              {/* {!(page.pathname === '/collaborations/') && (
                <motion.div variants={navItemAnim}>
                  <NavLink i={2} target="/collaborations/">
                    Collabs
                  </NavLink>
                </motion.div>
              )} */}
              {!(page.pathname === '/polls/') && (
                <motion.div variants={navItemAnim}>
                  <NavLink i={2} target="/polls/">
                    Shoot Polls
                  </NavLink>
                </motion.div>
              )}
              {!(page.pathname === '/retrospective/') && (
                <motion.div variants={navItemAnim}>
                  <NavLink i={3} target="/retrospective/">
                    Retrospective
                  </NavLink>
                </motion.div>
              )}
              {!(page.pathname === '/gallery/') && (
                <motion.div variants={navItemAnim}>
                  <NavLink i={4} target="/gallery/">
                    Portrait Gallery
                  </NavLink>
                </motion.div>
              )}
              <motion.div variants={navWrapAnim}>
                <Flex
                  mt={'1.5em'}
                  fontSize={['2.2rem', '2.8rem']}
                  opacity="0.9"
                  gap={['1rem', '4rem']}
                  width={'100%'}
                  justify="space-between"
                >
                  <motion.div variants={socialsItemAnim}>
                    <SocialLink
                      socialName="Instagram"
                      socialUrl="//www.instagram.com/"
                      variant="headerIcon"
                    />
                  </motion.div>

                  <motion.div variants={socialsItemAnim}>
                    <SocialLink
                      socialName="Twitter"
                      socialUrl="//www.twitter.com/"
                      variant="headerIcon"
                    />
                  </motion.div>

                  <motion.div variants={socialsItemAnim}>
                    <SocialLink
                      socialName="Tumblr"
                      socialUrl="//www.tumblr.com/"
                      variant="headerIcon"
                    />
                  </motion.div>
                </Flex>
              </motion.div>
            </ChakraBox>
          </ChakraBox>
        )}
      </AnimatePresence>
    </>
  );
};

TakeOverNav.displayName = 'TakeOverNav';
