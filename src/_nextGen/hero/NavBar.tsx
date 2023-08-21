import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Icon, List, ListItem } from '@chakra-ui/react';

import { Box, Flex } from '../primitives';
import { Button } from '../button';
import { ContentBrace } from '../layout';
import { FuzzyRainbowLink } from '../link/Link';

// On navigation, wait before it's loaded before removing the mobile overlay??
// add bubbles bg at 80% opacity

const NavBar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setNavIsVisible(!navIsVisible);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const showNav = !scroll || navIsVisible;

  return (
    <>
      <Button
        transition="all 0.3 ease"
        opacity={[1, !scroll ? 0 : 1]}
        pointerEvents={['all', !scroll ? 'none' : 'all']}
        variant="unstyled"
        onClick={handleClick}
        position="fixed"
        right="-1rem" // ???
        top="0"
        zIndex={99_999}
        transform="translate(-100%, 60%)"
      >
        {navIsVisible ? (
          <Icon as={FaTimes} w={10} h={10} />
        ) : (
          <Icon as={FaBars} w={10} h={10} />
        )}
      </Button>
      <Box
        transition="all 0.3 ease"
        position="fixed"
        top={showNav ? 0 : '-100px'}
        left="0"
        right="0"
        // zIndex={9999}
        bgGradient={'linear(to-b, rgba(0,0,0,0.9), rgba(0,0,0,0.6), rgba(0,0,0,0))'}
      >
        <ContentBrace display="flex" justifyContent="space-between" height="80px">
          <Flex justify="flex-start" align="center">
            <FuzzyRainbowLink textStyle="logo" target="/">
              Photography Showcase
            </FuzzyRainbowLink>
          </Flex>
          <List
            fontSize={['2rem', '1.5rem']}
            transition="margin 0.4 ease"
            position={['absolute', 'static']}
            onClick={handleClick}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={['column', 'row']}
            width={['100vw', 'auto']}
            left={0}
            top={navIsVisible ? 0 : '-110vh'}
            bg={['black', 'transparent']}
            height={['100vh', 'auto']}
            sx={{
              li: {
                mx: [0, 2, 4, 6],
                my: [5, 0],
              },
            }}
          >
            <ListItem display={['block', 'none']}>
              <FuzzyRainbowLink target="/">Home</FuzzyRainbowLink>
            </ListItem>
            <ListItem>
              <FuzzyRainbowLink target="/commissions/">Commissions</FuzzyRainbowLink>
            </ListItem>
            <ListItem>
              <FuzzyRainbowLink target="/collaborations/">Collabs</FuzzyRainbowLink>
            </ListItem>
            <ListItem>
              <FuzzyRainbowLink target="/retrospective/">Retrospective</FuzzyRainbowLink>
            </ListItem>
            <ListItem>
              <FuzzyRainbowLink target="/gallery/">Portrait Gallery</FuzzyRainbowLink>
            </ListItem>
          </List>
        </ContentBrace>
      </Box>
    </>
  );
};

export default NavBar;
