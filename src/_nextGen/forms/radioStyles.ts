import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';
import { cssVar } from '@chakra-ui/theme-tools';

import { flameOuter, iceShadow } from '../button/buttonStyles';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  parts.keys,
);

const $bg = cssVar('radio-bg');
const $fg = cssVar('radio-fg');
const $bd = cssVar('radio-bd');

const baseStyleControl = defineStyle(({ colorScheme }) => {
  return {
    [$bg.variable]: 'rgba(255,255,255,0.1)',
    [$fg.variable]: 'rgba(255,255,255,0)',
    [$bd.variable]: 'rgba(255,255,255,0.6)',
    _checked: {
      [$bg.variable]: `rgba(255,255,255,0.8)`,
      [$bd.variable]: `rgba(255,255,255,0.5)`,
    },
    _hover: {
      [$bd.variable]: `rgba(255,255,255,0.8)`,
      boxShadow: iceShadow,
      _checked: {
        [$bd.variable]: `rgba(255,255,255,0.8)`,
      },
    },
    _invalid: {
      [$bd.variable]: 'rgba(255,100,0,0.5)',
      [$bg.variable]: `rgba(255,100,0,0.2)`,
      boxShadow: flameOuter,
      _checked: {
        [$bd.variable]: 'rgba(255,100,0,0.5)',
        [$bg.variable]: `rgba(255,100,0,0.5)`,
      },
      _hover: {
        [$bd.variable]: 'colors.error.600',
        _checked: {
          [$bd.variable]: 'rgba(255,255,255,0.3)',
        },
      },
    },
    border: 'solid 2px',
    borderRadius: 'full',
    position: 'relative',
    borderColor: `${$bd.reference} !important`,
    bg: `${$bg.reference} !important`,
    _before: {
      content: `""`,
      display: 'inline-block',
      w: '50%',
      h: '50%',
      borderRadius: 'full',
      bg: $fg.reference,
    },
  };
});

const baseStyle = definePartsStyle(props => ({
  control: baseStyleControl(props),
}));

const sizes = {
  lg: definePartsStyle({
    control: { w: '24px', h: '24px' },
  }),
};

export const RadioStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'lg',
  },
});
