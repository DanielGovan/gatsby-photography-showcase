import { extendTheme, ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react';

import { ButtonStyles } from './_nextGen/button/buttonStyles';
import { HeadingStyles } from './_nextGen/typography/headingStyles';
import { textStyles } from './_nextGen/typography/Text';
import { TabsStyles } from './_nextGen/tabs/tabsStyles';
import { CheckboxStyles } from './_nextGen/forms/checkboxStyles';
import { RadioStyles } from './_nextGen/forms/radioStyles';
import { ProgressStyles } from './_nextGen/components/progressStyles';
import { InputStyles } from './_nextGen/forms/inputStyles';
import { TextareaStyles } from './_nextGen/forms/textareaStyles';
// import { TabsStyles } from './_nextGen/subPageContent/tabsStyles';

/**
 * This theme object can be changed and edited however you like. It's currently extending the default Chakra theme
 * (which itself is inspired by Tailwind CSS) with the values below.
 * Example usage of theme values: <Text color="brand.100" fontSize="6xl" fontWeight="bold">Boop</Text>
 */

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'system',
};

export const theme = extendTheme(
  {
    config,
    components: {
      Button: ButtonStyles,
      Heading: HeadingStyles,
      Tabs: TabsStyles,
      Checkbox: CheckboxStyles,
      Radio: RadioStyles,
      Progress: ProgressStyles,
      Input: InputStyles,
      Textarea: TextareaStyles,
    },
    // overwrites chakra theme body bg
    styles: {
      global: () => ({
        body: {
          bg: '',
        },
      }),
    },
    // overwrites chakra theme body bg
    fontSizes: {
      '6xl': {},
      '5xl': {},
      '4xl': {},
      '3xl': {},
      '2xl': {},
      xl: {},
      lg: {},
      md: {},
      sm: {},
      xs: {},
    },
    fonts: {
      body: 'Roboto, Inter, system-ui, sans-serif',
      heading: 'Ubuntu, Inter, system-ui, sans-serif',
      mono: 'Menlo, monospace',
    },
    colors: {
      lbd: {
        0: '#fff3f3',
        100: '#feccc9',
        200: '#feafa5',
        300: '#fd7866',
        400: '#fb5544',
        500: '#ee2a1c',
        600: '#c81d12',
        700: '#9a251b',
        800: '#651e17',
        900: '#651e17',
      },
      brand: {
        100: '#E0AAFF',
        200: '#C77DFF',
        300: '#9D4EDD',
        400: '#7B2CBF',
        500: '#5A189A',
        600: '#3C096C',
        700: '#240046',
        800: '#10002B',
        900: '#070014',
      },
    },
    textStyles: textStyles,
    breakpoints: ['30em', '48em', '62em', '80em'],
    semanticTokens: {
      // colors: {
      //   error: 'rgba(255,100,0,0.8)',
      //   success: 'green.500',
      //   primary: {
      //     default: 'purple.700',
      //   },
      //   secondary: {
      //     default: 'teal.700',
      //   },
      // },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'red',
  }),
);
