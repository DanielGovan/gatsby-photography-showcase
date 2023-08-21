import { keyframes } from '@emotion/react';
import { defineStyleConfig, theme } from '@chakra-ui/react';

const glowing = keyframes`
  0% { background-position: 0 0 }
  50% { background-position: 400% 0 }
  100% { background-position: 0 0 }
`;

export const flameShadow =
  '0px 0px 2px 0px  #ffffffbf,0px 0px 6px 1px #ff0, 0px 0px 12px 2px #f00, inset 0px 0px 2px 0px #ffffffbf, inset 0px 0px 6px 1px #ff0,inset 0px 0px 12px 2px #f00';

export const flameOuter =
  '0px 0px 2px 0px  #ffffffbf, 0px 0px 6px 1px #ff0, 0px 0px 12px 2px #f00';

export const iceShadow =
  '0 0 5px 1px rgba(255,255,255,0.75),0 0 10px 4px #00aaff7f,0 0 20px 8px #0000ff7f, inset 0 0 5px 1px rgba(255,255,255,0.75), inset 0 0 10px 4px #00aaff7f, inset 0 0 20px 8px #0000ff7f';

export const ButtonStyles = defineStyleConfig({
  ...theme.components.Button,
  sizes: {
    lg: {
      px: 8,
      py: 4,
    },
  },
  baseStyle: {
    ...theme.components.Button.baseStyle,
    borderRadius: 'xl',
    fontWeight: 'bold',
  },
  variants: {
    outline: {
      // bgGradient: 'linear(to-b, #aaa, #000)',
      bg: 'transparent',
      border: 'solid 2px rgba(255,255,255,0.7)',
      borderColor: 'rgba(255,255,255,0.7)',
      color: '#ccc',
      _hover: {
        // bgGradient: 'linear(to-bl, primary, #8b00bb)',
        border: 'solid 2px white',
        color: '#eee',
        boxShadow:
          '0px 0px 2px 0px  #ffffffbf,0px 0px 6px 1px #ff0,0px 0px 12px 2px #f00',
        bg: 'transparent',

        _disabled: {
          bg: 'gray.400',
        },
      },
      _disabled: {
        bgGradient: undefined,
        bg: 'gray.400',
        color: 'gray.600',
      },
    },
    solid: {
      bg: 'rgba(255,255,255,0.7)',
      border: 'solid 2px',
      borderColor: 'rgba(255,255,255,0.7)',
      color: '#ccc',
      _hover: {
        bg: '#600',
        borderColor: 'rgba(255,255,255,0.7)',
        boxShadow:
          '0 0 5px 2px rgba(255,255,255,0.75),0 0 10px 4px #00aaff7f,0 0 20px 8px #0000ff7f',
      },
    },
    ice: {
      border: 'solid 2px',
      color: 'rgba(255,255,255,0.7)',

      _hover: {
        color: '#fff',
        borderColor: '#fff',
        boxShadow: iceShadow,
      },
    },
    fire: {
      border: 'solid 2px',
      color: 'rgba(255,255,255,0.7)',

      _hover: {
        color: '#fff',
        borderColor: '#fff',
        boxShadow: flameShadow,
      },
    },
    glow: {
      border: 'solid 2px',
      borderColor: 'rgba(255,255,255,0.7)',
      color: '#ccc',
      background: 'rgba(0,0,0,0.2)',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 0,
      borderRadius: '1rem',
      _hover: {
        borderColor: '#fff',
        color: '#fff',
        _before: { opacity: '1' },
        _after: { opacity: '1' },
      },
      _before: {
        content: "''",
        background:
          'linear-gradient(135deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
        position: 'absolute',
        top: '-3px',
        left: '-3px',
        backgroundSize: '400%',
        zIndex: '-1',
        filter: 'blur(8px)',
        width: 'calc(100% + 6px)',
        height: 'calc(100% + 6px)',
        animation: `${glowing} 20s linear infinite`,
        opacity: '0',
        transition: 'opacity .3s ease-in-out',
        borderRadius: '15px',
      },
      _active: {
        borderColor: 'transparent',
        color: '#000',
        boxShadow: 'none',
        _after: { background: 'transparent' },
      },
      _after: {
        transition: 'opacity .3s ease-in-out',
        zIndex: '-1',
        content: "''",
        opacity: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        left: '0',
        top: ' 0',
        borderRadius: '15px',
      },
    },
    iconGlow: {
      mx: '4px',
      p: '0',
      bg: '#000',
      zIndex: '2',
      borderRadius: 'full',
      pos: 'relative',
      minW: '10px',
      minH: '10px',
      h: '34px',
      w: '34px',
      transition: 'all .2s',
      _hover: {
        color: 'black',
        bg: 'transparent',
        _after: { opacity: '1' },
        _disabled: {
          color: 'gray.400',
        },
      },
      _after: {
        opacity: '0',
        transition: 'opacity .3s ease-in-out',
        pos: 'absolute',
        borderRadius: 'full',
        top: '-4px',
        left: '-4px',
        zIndex: '-1',
        content: "''",
        filter: 'blur(5px)',
        height: 'calc(100% + 8px)',
        width: 'calc(100% + 8px)',
        background:
          'linear-gradient(135deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
        backgroundSize: '400%',
        animation: `${glowing} 20s linear infinite`,
      },
      _disabled: {
        color: 'gray.400',
        textDecorationColor: 'gray.400',
      },
    },
    icon: {
      borderColor: 'black',
      bg: 'black',
      p: '0',
      fontSize: '4rem',
      zIndex: '2',
      borderRadius: 'full',
      pos: 'relative',
      minW: '10px',
      minH: '10px',
      h: '34px',
      w: '34px',
      textShadow:
        '0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff,0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff,0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff',
      _hover: {
        borderColor: 'white',
        color: 'black',
        bg: 'white',
        boxShadow:
          '0px 0px 2px 0px  #ffffffbf,0px 0px 6px 1px #ff0,0px 0px 12px 2px #f00 , inset 0px 0px 2px 0px #ffffffbf, inset 0px 0px 6px 1px #ff0,inset 0px 0px 12px 2px #f00',
        // background: 'green',
      },
    },
  },

  defaultProps: {
    ...theme.components.Button.defaultProps,
    variant: 'glow',
    size: 'lg',
  },
});
