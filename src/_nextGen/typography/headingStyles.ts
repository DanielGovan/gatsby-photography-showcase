import { defineStyleConfig, theme } from '@chakra-ui/react';

export const HeadingStyles = defineStyleConfig({
  ...theme.components.Heading,
  // Styles for the base style
  baseStyle: {
    ...theme.components.Heading.baseStyle,
  },
  // Styles for the size variations
  sizes: {
    ...theme.components.Heading.sizes,
    '4xl': {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
      letterSpacing: '',
    },
    '3xl': {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
      letterSpacing: '',
    },
    '2xl': {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
      letterSpacing: '',
    },
    // breakpoints: ['30em', '48em', '62em', '80em'],
    // h1 HeroHeader
    xl: {
      fontSize: ['2rem', '3rem', '3.75rem'],
      lineHeight: 0.9,
      fontWeight: 400,
      letterSpacing: '0',
      textShadow: '4px 4px 10px #000',
      color: '#fff',
    },
    // h2 BodyHeader
    lg: {
      fontSize: ['2.8rem', '3rem'],
      lineHeight: ['1.1', '1.35'],
      fontWeight: 300,
      letterSpacing: '2px',
      color: '#ddd',
    },
    // h3 SubHeader
    md: {
      fontSize: ['1.6rem', '2rem'],
      lineHeight: ['1.35', '1.2'],
      fontWeight: 700,
      letterSpacing: '0',
      color: 'rgba(255,255,255,1)',
    },
    // h4 SmallHeader
    sm: {
      fontSize: ['2rem', '1.6rem'],
      lineHeight: ['1.2', '1.35'],
      fontWeight: 300,
      letterSpacing: '0',
      position: 'relative',
    },
    xs: {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
      letterSpacing: '',
    },
  },
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});

//Old Header / h1

//   letter-spacing: 2px;
//   font-weight: 300;
//   margin: 2rem 0 0.5rem 0;
//   font-size: 3rem;
//   @media screen and (max-width: 500px) {
//     font-size: 2.8rem;
//   }

// //Old Subheader / h2

//   margin: 4rem 0 1rem 0;
//   font-size: 2rem;
//   @media screen and (max-width: 500px) {
//     font-size: 1.6rem;
//   }
