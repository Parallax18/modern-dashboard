import { defineStyleConfig } from '@chakra-ui/react';

const Card = defineStyleConfig({
  baseStyle: {
    border: '1px solid',
    borderColor: 'brand.gray.lighter',
    rounded: 'lg',

    padding: 5,
  },
});

export default Card;
