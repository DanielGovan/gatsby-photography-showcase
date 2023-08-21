import { tabsAnatomy as parts } from '@chakra-ui/anatomy';

import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/styled-system';

import { flameShadow } from '../button/buttonStyles';

// can we add an ::after that is the 'button'? And then animate it?

const $fg = cssVar('tabs-color');
const $bg = cssVar('tabs-bg');
const $bc = cssVar('tabs-border-color');

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  parts.keys,
);

const sizes = {
  lg: definePartsStyle({
    tab: {
      fontSize: 'lg',
      py: 3,
      px: 4,
    },
  }),
};

const variantSelectorButton = definePartsStyle(() => {
  return {
    tab: {
      [$fg.variable]: `rgba(255,255,255,0.8)`,
      [$bc.variable]: `colors.slate.600`,
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '1',
      px: '1.6em',
      py: '0.8em',
      _selected: {
        [$fg.variable]: `rgba(0,0,0,0.8)`,
        [$bg.variable]: `rgba(255,255,255,0.8)`,
        [$bc.variable]: `rgba(255,255,255,0.8)`,
      },
      _hover: { boxShadow: flameShadow },
      border: 'solid 1px',
      borderColor: $bc.reference,
      borderWidth: '1px 0 1px 1px',
      '&:first-of-type': { borderRadius: '12px 0 0 12px' },
      '&:last-child': { borderWidth: '1px', borderRadius: '0 12px 12px 0' },
      color: $fg.reference,
      bg: $bg.reference,
    },
    tablist: {},
  };
});

const variants = {
  'selector-button': variantSelectorButton,
  unstyled: {},
};

export const TabsStyles = defineMultiStyleConfig({
  sizes,
  variants,
  defaultProps: {
    size: 'lg',
    variant: 'selector-button',
  },
});
