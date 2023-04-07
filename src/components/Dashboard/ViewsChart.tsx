import { Box, Flex, Stack, Text, useMultiStyleConfig } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

import type { THandleDataReturnType } from '@/types/chart-data';
import { getChartConfig } from '@/utils/analytics-config-data/getChartConfig';

import InfoIcon from '../icons/InfoIcon';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type TChartDataProps = {
  chartData: {
    data: THandleDataReturnType;
    text: string;
    value: string;
  };
};

const ViewsChart = ({ chartData }: TChartDataProps) => {
  const styles = useMultiStyleConfig('Card');

  const categories = useMemo(() => {
    return chartData?.data?.map((i) => i.category);
  }, [chartData]);
  const views = useMemo(() => {
    return chartData?.data?.map((i) => i.value);
  }, [chartData]);

  const { options, series } = getChartConfig({ categories, views });

  return (
    <>
      <Box __css={styles} w={'full'}>
        <Stack w={'full'}>
          <Flex w={'full'} justifyContent={'space-between'}>
            <Stack spacing={1}>
              <Text
                fontWeight={'bold'}
                fontSize={'base'}
                color={'brand.gray.dark'}
              >
                Page Views
              </Text>
              <Text color={'brand.gray.light'} fontSize={'sm'}>
                {chartData?.text}
              </Text>
            </Stack>
            <InfoIcon />
          </Flex>
          <Text fontSize={'4xl'} color={'brand.gray.dark'} fontWeight={'bold'}>
            {views?.reduce((a, b) => a + b, 0)}
          </Text>
          <Box w={'full'}>
            {series && (
              <Chart
                options={options}
                series={series}
                type="area"
                width="100%"
                height={400}
              />
            )}
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ViewsChart;
