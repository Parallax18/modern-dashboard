// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

import { Card } from '@/components';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  components: {
    Card,
  },
  colors: {
    brand: {
      orange: { dark: '#FF5403', light: '#FFEEE5' },
      gray: {
        dark: '#131316',
        mid: '#56616B',
        light: '#31373D',
        lighter: '#EFF1F6',
      },
    },
  },
});
