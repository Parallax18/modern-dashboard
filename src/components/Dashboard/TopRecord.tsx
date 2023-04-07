import { Box, Flex, Stack, Text, useMultiStyleConfig } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import { getDonutConfig } from '@/utils/analytics-config-data/getDonutConfig';

import TopItem from './TopItem';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type LocationDonutData = {
  country: string;
  percent: number;
  color: string;
  flag: React.FC;
};

type SourceDonutData = {
  source: string;
  percent: number;
  color: string;
  logo: React.FC;
};

// eslint-disable-next-line prettier/prettier
type TRecordDonutData = 
| LocationDonutData[] 
| SourceDonutData[];

type TopRecordProps = {
  data: TRecordDonutData | undefined;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
  colors: any[] | undefined;
  type: 'locations' | 'sources';
  title: string;
};

const TopRecord = ({ data, series, colors, type, title }: TopRecordProps) => {
  const styles = useMultiStyleConfig('Card');
  const [clrs, setClrs] = useState<string[]>();
  useEffect(() => {
    setClrs(colors);
  }, [colors]);
  const { options } = getDonutConfig();

  return (
    <Box __css={styles} minH={'355px'}>
      <Flex w={'full'} justifyContent={'space-between'}>
        <Text fontWeight={'bold'} fontSize={'base'} color={'brand.gray.dark'}>
          {title}
        </Text>
        <Text color={'brand.orange.dark'} fontSize={'xs'}>
          View Full reports
        </Text>
      </Flex>

      <Flex
        mt={10}
        alignItems={'center'}
        w={'full'}
        justifyContent={'space-between'}
        flexDirection={['column-reverse', 'row']}
      >
        {type === 'locations' && (
          <Stack spacing={4}>
            {React.Children.toArray(
              // @ts-ignore
              data?.map(({ country, percent, color, flag }) => (
                <TopItem
                  color={color}
                  percent={percent}
                  logo={flag}
                  text={country}
                />
              ))
            )}
            <TopItem color={'#F09468'} percent={24} text={'Others'} />
          </Stack>
        )}

        {type === 'sources' && (
          <Stack spacing={4}>
            {React.Children.toArray(
              // @ts-ignore
              data?.map(({ source, percent, color, logo }) => (
                <TopItem
                  color={color}
                  percent={percent}
                  logo={logo}
                  text={source}
                />
              ))
            )}
            <TopItem
              color={'#F09468'}
              percent={24}
              // logo={}
              text={'Others'}
            />
          </Stack>
        )}

        <Box>
          {series && (
            <Chart
              type="donut"
              options={{ ...options, colors: clrs }}
              series={series}
              height={220}
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default TopRecord;
