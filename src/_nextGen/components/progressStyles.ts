import { progressAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  parts.keys,
);

const baseStyleLabel = defineStyle({
  lineHeight: '1',
  fontSize: '0.25em',
  fontWeight: 'bold',
  color: 'white',
});

const baseStyleTrack = defineStyle(props => {
  return {
    bg: 'rgba(0,0,0, 0.2)',
    borderRadius: '20px',
  };
});

const baseStyleFilledTrack = defineStyle(props => {
  return {
    transition: 'width 0.5s',
    backgroundColor: 'transparent',
    borderRadius: '20px',
    bgGradient:
      'linear(to-b, rgba(255,255,255,0.6), rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
  };
});

const baseStyle = definePartsStyle(props => ({
  label: baseStyleLabel,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props),
}));

const sizes = {
  xs: definePartsStyle({
    track: { h: '1' },
  }),
  sm: definePartsStyle({
    track: { h: '2' },
  }),
  md: definePartsStyle({
    track: { h: '3' },
  }),
};

export const ProgressStyles = defineMultiStyleConfig({
  sizes,
  baseStyle,
  defaultProps: {
    size: 'sm',
    colorScheme: 'blue',
  },
});
