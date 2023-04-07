import type { UseDisclosureProps } from '@chakra-ui/react';
import { Avatar, Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  AddPhotoIcon,
  BinIcon,
  ClockIcon,
  DashboardIcon,
  FileAttachmentIcon,
  HourGlassIcon,
  MainStackLogo,
  MoreIcon,
  PenIcon,
  UsersIcon,
  VideoCollectionIcon,
} from '@/components';

import SideBarItem from './SideBarItem';

const Routes = [
  {
    group: '',
    routes: [
      {
        icon: DashboardIcon,
        text: 'Dashboard',
      },
      {
        icon: PenIcon,
        text: 'Item 1',
      },
      {
        icon: UsersIcon,
        text: 'Item 2',
      },
      {
        icon: HourGlassIcon,
        text: 'Item 3',
      },
    ],
  },
  {
    group: 'OTHERS 1',
    routes: [
      {
        icon: AddPhotoIcon,
        text: 'Item 4',
      },
      {
        icon: BinIcon,
        text: 'Item 5',
      },
    ],
  },

  {
    group: 'OTHERS 2',
    routes: [
      {
        icon: VideoCollectionIcon,
        text: 'Item 6',
      },
      {
        icon: FileAttachmentIcon,
        text: 'Item 7',
      },
      {
        icon: ClockIcon,
        text: 'Item 8',
      },
    ],
  },
];

const Sidebar = ({ isOpen, onClose }: UseDisclosureProps) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  return (
    <Box h={'full'} position={'relative'}>
      <Box
        bg={'transparent'}
        h={'full'}
        w={'full'}
        position={'fixed'}
        top={0}
        left={0}
        zIndex={200}
        display={isOpen ? 'block' : 'none'}
        onClick={() => onClose!()}
      />
      <AnimatePresence>
        {(isOpen || isDesktopOrLaptop) && (
          <Box
            as={motion.div}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition="linear"
            borderRight={'1px solid #EFF1F6'}
            position={'fixed'}
            bg={'#fff'}
            left={0}
            top={0}
            h={'full'}
            py={5}
            zIndex={300}
            overflowY={'scroll'}
            w={['70%', '20%']}
          >
            <Flex px={16} justifyContent={'space-between'}>
              <MainStackLogo />
            </Flex>

            <Stack mt={10} spacing={7}>
              {React.Children.toArray(
                Routes.map((item) => (
                  <Stack spacing={4}>
                    <Text
                      fontWeight={'normal'}
                      color={'#56616B'}
                      fontSize={'xs'}
                      px={16}
                    >
                      {item.group}
                    </Text>
                    <Stack spacing={3}>
                      {React.Children.toArray(
                        item.routes.map(({ text, icon }) => (
                          <SideBarItem
                            Icon={icon}
                            text={text}
                            active={text === 'Dashboard'}
                          />
                        ))
                      )}
                    </Stack>
                  </Stack>
                ))
              )}
            </Stack>

            <Flex
              mt={32}
              flex={1}
              pl={16}
              pr={5}
              alignItems={'center'}
              w={'full'}
              justifyContent={'space-between'}
            >
              <HStack spacing={3}>
                <Avatar
                  src="images/user-profile-pic.png"
                  bg={'gray.400'}
                  name={'Blessing Daniels'}
                  size={'sm'}
                />
                <Text
                  color={'brand.gray.mid'}
                  fontWeight={'bold'}
                  fontSize={'sm'}
                >
                  Blessing Daniels
                </Text>
              </HStack>
              <MoreIcon />
            </Flex>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Sidebar;
