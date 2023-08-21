import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

import { InputStyles } from './inputStyles';

const baseStyle = defineStyle({
  ...InputStyles.baseStyle?.field,
  paddingY: '2',
  minHeight: '20',
  lineHeight: 'short',
  verticalAlign: 'top',
});

const variants = {
  outline: defineStyle(props => InputStyles.variants?.outline(props).field ?? {}),
  filled: defineStyle(props => InputStyles.variants?.filled(props).field ?? {}),
  unstyled: InputStyles.variants?.unstyled.field ?? {},
};

export const TextareaStyles = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
