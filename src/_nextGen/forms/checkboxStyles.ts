import { defineStyleConfig, theme } from '@chakra-ui/react';

import { flameOuter, iceShadow } from '../button/buttonStyles';

export const CheckboxStyles = defineStyleConfig({
  ...theme.components.Checkbox,
  baseStyle: {
    ...theme.components.Checkbox.baseStyle,
    cursor: 'pointer',
    control: {
      height: '24px',
      width: '24px',
      borderRadius: '5px',
      border: '2px solid',
      borderColor: 'rgba(255,255,255,0.6)',
      bg: 'rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      mt: '0.3rem',
      mr: '.2rem',
      svg: {
        height: '20px',
        width: '20px',
        display: 'none',
      },
      _hover: {
        borderColor: 'rgba(255,255,255,1)',
        boxShadow: iceShadow,
      },
      _focus: {
        borderColor: 'rgba(255,255,255,1)',
        boxShadow: '0px 0px 8px rgba(255,255,255, 0.6)',
      },
      _checked: {
        bg: 'white',
        borderColor: 'rgba(0, 0, 0, 0)',
        svg: {
          display: 'block',
        },
        _hover: {
          bg: 'white',
          borderColor: 'rgba(0, 0, 0, 0.2)',
        },
        _focus: {
          bg: 'white',
          borderColor: 'rgba(0, 0, 0, 0.2)',
          boxShadow: '0px 0px 8px rgba(255,255,255, 0.6)',
        },
      },
      _invalid: {
        borderColor: 'rgba(255,100,0,0.5)',
        bg: 'rgba(255,100,0,.2)',
        boxShadow: flameOuter,
        _checked: {
          bg: 'rgba(255,100,0,.5)',
          borderColor: 'rgba(255,255,255,.3)',
          _focus: {
            borderColor: 'rgba(0, 0, 0, 0.2)',
          },
          _hover: {
            borderColor: 'rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
  },
  defaultProps: {
    ...theme.components.Checkbox.defaultProps,
    size: 'lg',
  },
});
