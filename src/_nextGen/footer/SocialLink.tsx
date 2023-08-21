import React from 'react';
import { FaInstagram, FaTwitter, FaTumblr } from 'react-icons/fa';

import { FooterLink, NavIcon } from '../link/Link';

type SocialProps = {
  socialName: 'Email' | 'Instagram' | 'Tumblr' | 'Twitter';
  socialUrl: string;
  variant: 'footerLink' | 'headerIcon';
};

export const SocialLink = ({ socialName, socialUrl, variant }: SocialProps) => {
  let socialIcon;
  let socialColor;
  switch (socialName) {
    case 'Tumblr': {
      socialIcon = <FaTumblr />;
      socialColor = '#668ec1';
      break;
    }
    case 'Twitter': {
      socialIcon = <FaTwitter />;
      socialColor = '#57BBF5';
      break;
    }
    default: {
      socialIcon = <FaInstagram />;
      socialColor = '#fc5e93';
      break;
    }
  }

  if (variant === 'headerIcon')
    return (
      <NavIcon
        target={socialUrl}
        external={true}
        relme={true}
        socialIcon={socialIcon}
        socialColor={socialColor}
      ></NavIcon>
    );
  return (
    <FooterLink
      target={socialUrl}
      external={true}
      relme={true}
      socialIcon={socialIcon}
      socialColor={socialColor}
    >
      {socialName}
    </FooterLink>
  );
};

SocialLink.displayName = 'Social link';

// instagram's colours
// #5B51D8
// #833AB4
// #C13584
// #E1306C
// #FD1D1D
// #F56040
// #F77737
// #FCAF45
// #FFDC80
