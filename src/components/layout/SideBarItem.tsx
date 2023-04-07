import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const SideBarItem = ({
  Icon,
  text,
  active,
}: //   route,
{
  Icon: React.FC;
  //   route: string;
  text: string;
  active: boolean;
}) => {
  return (
    <Flex
      borderLeft={active ? '2px solid' : 'none'}
      borderColor={' brand.orange.dark'}
      py={1}
      px={16}
      w={'full'}
    >
      <HStack spacing={4} w={'full'}>
        <Box w={'20%'}>
          <Icon />
        </Box>

        <Text
          w={'full'}
          fontWeight={'semibold'}
          color={active ? 'brand.orange.dark' : 'brand.gray.mid'}
        >
          {text}
        </Text>
      </HStack>
    </Flex>
  );
};

export default SideBarItem;
