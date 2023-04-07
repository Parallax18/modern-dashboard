import { Box, Text } from '@chakra-ui/react';
import React from 'react';

type OnClickArgType = {
  value: string;
  text: string;
};

type PillProps = {
  text: string;
  value: string;
  isActive: boolean;
  onclick: ({ value, text }: OnClickArgType) => void;
};

const Pill = ({ text, value, onclick, isActive }: PillProps) => {
  return (
    <Box
      cursor={'pointer'}
      onClick={() => onclick({ value, text })}
      border={isActive ? '2px solid' : '1px solid'}
      bg={isActive ? 'brand.orange.light' : 'none'}
      borderColor={isActive ? 'brand.orange.dark' : 'brand.gray.lighter'}
      px={4}
      py={2}
      rounded={'full'}
    >
      <Text
        w={'max-content'}
        fontSize={'xs'}
        color={isActive ? 'brand.orange.dark' : 'brand.gray.mid'}
        fontWeight={'semibold'}
      >
        {text}
      </Text>
    </Box>
  );
};

export default Pill;
