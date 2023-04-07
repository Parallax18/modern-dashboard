import { Box, HStack, Text } from '@chakra-ui/react';

type TopItemProps = {
  logo?: React.FC;
  text: string;
  percent: number;
  color: string;
};

const TopItem = ({ logo: Logo, text, percent, color }: TopItemProps) => {
  return (
    <HStack alignItems={'center'} spacing={5}>
      <HStack alignItems={'center'} w={'full'} spacing={3}>
        <Box w={'20%'}>{Logo && <Logo />}</Box>
        <HStack w={'full'}>
          <Text textTransform={'capitalize'}>{text}</Text>
          <Text fontWeight={'bold'}>{percent}%</Text>
        </HStack>
      </HStack>
      <Box
        bg={color}
        h={3}
        w={3}
        rounded={'full'}
        style={{ clipPath: 'circle()' }}
      />
    </HStack>
  );
};

export default TopItem;
