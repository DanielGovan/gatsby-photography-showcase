import { tabsAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';

const $fg = cssVar('tabs-color');
const $bg = cssVar('tabs-bg');
// const $border = cssVar('tabs-border-color');

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  parts.keys,
);

const baseStyleRoot = defineStyle(props => {
  const { orientation } = props;
  return {
    display: orientation === 'vertical' ? 'flex' : 'block',
  };
});

const baseStyleTab = defineStyle(props => {
  const { isFitted } = props;

  return {
    flex: isFitted ? 1 : undefined,
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: {
      zIndex: 1,
      boxShadow: 'outline',
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.4,
    },
  };
});

const baseStyleTablist = defineStyle(props => {
  const { align = 'start', orientation } = props;

  const alignments: Record<string, string> = {
    end: 'flex-end',
    center: 'center',
    start: 'flex-start',
  };

  return {
    justifyContent: alignments[align],
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
  };
});

const baseStyleTabpanel = defineStyle({
  p: 4,
});

const baseStyle = definePartsStyle(props => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel,
}));

const sizes = {
  sm: definePartsStyle({
    tab: {
      py: 1,
      px: 4,
      fontSize: 'sm',
    },
  }),
  md: definePartsStyle({
    tab: {
      fontSize: 'md',
      py: 2,
      px: 4,
    },
  }),
  lg: definePartsStyle({
    tab: {
      fontSize: 'lg',
      py: 3,
      px: 4,
    },
  }),
};

const variantLine = definePartsStyle(props => {
  const { colorScheme, orientation } = props;
  const isVertical = orientation === 'vertical';
  const borderProp = orientation === 'vertical' ? 'borderStart' : 'borderBottom';
  const marginProp = isVertical ? 'marginStart' : 'marginBottom';

  return {
    tablist: {
      [borderProp]: '2px solid',
      borderColor: 'inherit',
    },
    tab: {
      [borderProp]: '2px solid',
      borderColor: 'transparent',
      [marginProp]: '-2px',
      _selected: {
        [$fg.variable]: `colors.green.600`,
        _dark: {
          [$fg.variable]: `colors.${colorScheme}.200`,
        },
        borderColor: 'currentColor',
      },
      _active: {
        [$bg.variable]: 'colors.gray.200',
        _dark: {
          [$bg.variable]: 'colors.whiteAlpha.300',
        },
      },
      _disabled: {
        _active: { bg: 'none' },
      },
      color: `${$fg.reference} !important`,
      bg: `${$bg.reference} !important`,
    },
  };
});

const variantUnstyled = definePartsStyle({});

const variants = {
  line: variantLine,
  unstyled: variantUnstyled,
};

export const TabsStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'line',
  },
});
