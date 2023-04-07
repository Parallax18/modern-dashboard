import type { UseDisclosureProps } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import HamburgerIcon from '../icons/HamburgerIcon';
import MainStackLogo from '../svg/MainStackLogo';

const TopBar = ({ onOpen }: UseDisclosureProps) => {
  return (
    <Flex
      py={5}
      position={'fixed'}
      zIndex={100}
      bg="#fff"
      w={'full'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box display={['block', 'none']}>
        <MainStackLogo />
      </Box>
      <Text
        display={['none', 'block']}
        color={'brand.gray.dark'}
        fontWeight={'bold'}
        fontSize={'base'}
      >
        Dashboard
      </Text>

      <Box mr={5} onClick={() => onOpen!()}>
        <HamburgerIcon />
      </Box>
    </Flex>
  );
};

export default TopBar;
