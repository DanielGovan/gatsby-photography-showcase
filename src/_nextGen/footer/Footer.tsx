import React from 'react';
import { List, ListItem, ListItemProps, ListProps } from '@chakra-ui/react';

import { ContentBrace } from '../layout/ContentBrace';
import { BodyText, SmallHeader } from '../typography';
import { FooterLink, InlineLink } from '../link/Link';
import { Box } from '../primitives';

import { SocialLink } from './SocialLink';

// TODO: animate the lists in sequence
// TODO: Add pictures! An insta feed? A page preview?

export const FooterList = ({ children, ...rest }: ListProps) => {
  return <List {...rest}>{children}</List>;
};

export const FooterListItem = ({ children, ...rest }: ListItemProps) => {
  return <ListItem {...rest}>{children}</ListItem>;
};

const gradients = `
linear-gradient(350deg, rgba(255, 0, 0, 0.4) 0%, rgba(0,0,0,0) 60%),
radial-gradient(circle at 102% 102%, rgba(255, 0, 0, 0.4) 0%, rgba(0,0,0,0) 10%),
linear-gradient(10deg, rgba(0, 0, 255, 0.4) 0%, rgba(0,0,0,0) 60%),
radial-gradient(circle at -2% 102%, rgba(0, 0, 255, 0.6) 0%, rgba(0,0,0,0) 10%)
`;

const Footer = () => {
  return (
    <Box backgroundColor="none" background={gradients} backdropBlur="20px">
      <ContentBrace
        display="flex"
        textAlign={['center', 'left']}
        justifyContent={['center']}
        alignItems={['center']}
        gap={['20px', '0']}
        mt="5rem"
        mb="5rem"
      >
        <SmallHeader
          fontSize={['2rem', '3rem', '3.5rem']}
          letterSpacing="5px"
          color="white"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit eum.
        </SmallHeader>
      </ContentBrace>
      <ContentBrace
        display="flex"
        textAlign={['center', 'left']}
        justifyContent={['center', 'space-between']}
        alignItems={['center', 'flex-end']}
        flexDirection={['column', 'row']}
        gap={['20px', '0']}
        pb={['0', '50px']}
      >
        <Box flexBasis={['1', '45%']}>
          <FooterList fontSize="2.5rem" sx={{ li: { mb: '1.612rem' } }}>
            <FooterLink target="/commissions" subtext="Lorem ipsum">
              Page title
            </FooterLink>
            <FooterLink target="/retrospective" subtext="Lorem ipsum">
              Page title
            </FooterLink>
            <FooterLink target="/gallery" subtext="Lorem ipsum">
              Page title
            </FooterLink>
            <FooterLink target="/polls" subtext="Lorem ipsum">
              Page title
            </FooterLink>
            <FooterLink target="/collaborations" subtext="Lorem ipsum">
              Page title
            </FooterLink>
          </FooterList>
        </Box>
        <Box flexBasis={['1', '25%']}>
          {/* <SmallHeader>Follow me</SmallHeader> */}
          <FooterList
            fontSize="1.5rem"
            opacity="0.9"
            mt="1rem"
            sx={{ li: { mb: '.615rem' } }}
          >
            <SocialLink
              socialName="Instagram"
              socialUrl="//www.instagram.com/"
              variant="footerLink"
            />
            <SocialLink
              socialName="Twitter"
              socialUrl="//www.twitter.com/"
              variant="footerLink"
            />
            <SocialLink
              socialName="Tumblr"
              socialUrl="//www.tumblr.com/"
              variant="footerLink"
            />
          </FooterList>
        </Box>
        <Box flexBasis={['1', '25%']}>
          {/* <SmallHeader>Miscellany</SmallHeader> */}
          <FooterList opacity="0.8" mt="0.6rem" sx={{ li: { mb: '0.615rem' } }}>
            <FooterListItem>
              <BodyText fontSize="1rem">
                This site is protected by reCAPTCHA and the Google{' '}
                <InlineLink target="https://policies.google.com/privacy" external={true}>
                  Privacy Policy
                </InlineLink>{' '}
                and{' '}
                <InlineLink target="https://policies.google.com/terms" external={true}>
                  Terms of Service
                </InlineLink>{' '}
                apply.
              </BodyText>
            </FooterListItem>
            <FooterListItem>
              <BodyText lineHeight="1.5" fontSize="1rem">
                Contact:{' '}
                <InlineLink target="mailto:yourname@gmail.com" external={true}>
                  yourname@gmail.com
                </InlineLink>{' '}
              </BodyText>
            </FooterListItem>
            <FooterListItem>
              <BodyText lineHeight="1.5" fontSize="1rem">
                © Dan Govan {new Date().getFullYear()}
              </BodyText>
            </FooterListItem>
          </FooterList>
        </Box>
      </ContentBrace>
    </Box>
  );
};

export default Footer;
