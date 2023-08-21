import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { getColor, mode } from '@chakra-ui/theme-tools';

import { flameOuter, iceShadow } from '../button/buttonStyles';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  parts.keys,
);

const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _placeholder: {
      color: 'rgba(255,255,255,0.4)',
    },
  },
});

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode('blue.500', 'blue.300')(props),
    errorBorderColor: ec || mode('red.500', 'red.300')(props),
  };
}

const variantOutline = definePartsStyle(props => {
  return {
    field: {
      border: '2px solid',
      borderColor: 'inherit',
      // bg: 'inherit',
      bg: mode('gray.100', 'whiteAlpha.100')(props),
      _hover: {
        borderColor: 'white',
        boxShadow: iceShadow,
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _invalid: {
        borderColor: 'inherit',
        boxShadow: flameOuter,
        // boxShadow: `0 0 0 1px purple}`,
        _hover: { borderColor: 'white' },
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: 'white',
        // boxShadow: flameOuter,
      },
    },
    addon: {
      border: '1px solid',
      borderColor: mode('inherit', 'whiteAlpha.50')(props),
      bg: mode('gray.100', 'whiteAlpha.300')(props),
    },
  };
});

const variantFilled = definePartsStyle(props => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: mode('gray.100', 'whiteAlpha.100')(props),
      _hover: {
        bg: mode('gray.200', 'whiteAlpha.300')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _invalid: {
        borderColor: getColor(theme, ec),
      },
      _focusVisible: {
        bg: 'transparent',
        borderColor: getColor(theme, fc),
      },
    },
    addon: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: mode('gray.100', 'whiteAlpha.50')(props),
    },
  };
});

const variantUnstyled = definePartsStyle({
  field: {
    bg: 'transparent',
    px: '0',
    height: 'auto',
  },
  addon: {
    bg: 'transparent',
    px: '0',
    height: 'auto',
  },
});

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  unstyled: variantUnstyled,
};

export const InputStyles = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
