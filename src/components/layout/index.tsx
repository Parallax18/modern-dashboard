import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Index = ({ children }: { children: JSX.Element }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Box pl={[3, '23%']} pr={[3, 10]} w={'full'}>
        <TopBar onOpen={onOpen} />
        <Box py={20} w={'full'}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
