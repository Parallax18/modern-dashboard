import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { useTimeOfDay } from '@/hooks/use-time-of-day';

const Header = () => {
  const { tod, emoji } = useTimeOfDay();
  //   console.log({ time });

  return (
    <Flex alignItems={'end'} justifyContent={'space-between'} w={'full'}>
      <Stack>
        <Text
          display={['block', 'none']}
          color={'brand.gray.dark'}
          fontWeight={'bold'}
          fontSize={'base'}
        >
          Dashboard
        </Text>
        <Text color={'brand.gray.dark'} fontSize={'xl'} fontWeight={'bold'}>
          {/* Good morning, Blessing &#127781; &#127769; */}
          {`Good ${tod}, Blessing ${String.fromCodePoint(emoji)}`}
        </Text>
        <Text color={'brand.gray.light'} fontSize={'xs'}>
          Check out your dashboard summary.
        </Text>
      </Stack>
      <Text
        display={['none', 'block']}
        color={'brand.orange.dark'}
        fontSize={'xs'}
      >
        View analytics
      </Text>
    </Flex>
  );
};

export default Header;
