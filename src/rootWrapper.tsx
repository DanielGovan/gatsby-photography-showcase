import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { theme } from './theme';

const appCheckKey = process.env.GATSBY_RECAPTCHA_SITE_KEY;

export const wrapPageElement = ({ element }: any) => (
  <GoogleReCaptchaProvider reCaptchaKey={appCheckKey!}>
    <ChakraProvider theme={theme} resetCSS>
      <AnimatePresence mode="wait">{element}</AnimatePresence>
    </ChakraProvider>
  </GoogleReCaptchaProvider>
);

export const onRenderBody = ({ setHtmlAttributes }: any) => {
  setHtmlAttributes({ lang: 'en' });
};
