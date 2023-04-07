/* eslint-disable import/no-cycle */
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { HStack, Stack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';

import { useAnalyticsData } from '@/api/hooks/use-analytics-data';
import { CustomDatePicker, TopRecord } from '@/components';
import { useChartData } from '@/hooks/use-chart-data';
import { useTopRecordData } from '@/hooks/use-top-location-data';
import type { TViewsChartData } from '@/types/chart-data';

import Pill from './Pill';
import ViewsChart from './ViewsChart';

const pills = [
  {
    text: '1 Day',
    value: '1',
  },
  {
    text: '3 Days',
    value: '3',
  },
  {
    text: '7 Days',
    value: '7',
  },
  {
    text: '30 Days',
    value: '30',
  },
  {
    text: 'All Time',
    value: 'all',
  },
  {
    text: 'Custom Date',
    value: 'custom',
  },
];

const Analytics = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { useGetAnalytics } = useAnalyticsData();
  const { data, isLoading } = useGetAnalytics();
  const [chartData, setChartData] = useState<TViewsChartData>();
  const { handleData, handleSelectedView } = useChartData();

  const analyticsData = useMemo(() => data, [data, isLoading]);

  const { handleTopLocations, handleTopReferralSources } = useTopRecordData();

  const {
    locations: topLocations,
    series,
    colors,
  } = handleTopLocations(analyticsData?.top_locations);

  const { topRefSeries, sourceColors, sources } = handleTopReferralSources(
    analyticsData?.top_sources
  );

  useEffect(() => {
    // @ts-ignore
    const initialFetchdata = handleData(analyticsData?.graph_data.views);
    setChartData({
      data: initialFetchdata,
      text: 'All Time',
      value: 'all',
    });
  }, [data]);

  return (
    <Stack mt={5} spacing={7}>
      <Stack spacing={5}>
        <HStack overflowX={'scroll'} w={'full'} maxH={'max-content'}>
          {React.Children.toArray(
            pills.map((item) => (
              <Pill
                onclick={({ value, text }) => {
                  if (value === 'custom') {
                    onOpen();
                  } else {
                    setChartData({
                      value,
                      text,
                      data: handleSelectedView({ view: value }),
                    });
                  }
                }}
                {...item}
                isActive={item.value === chartData?.value}
              />
            ))
          )}
        </HStack>

        {chartData && <ViewsChart chartData={chartData} />}
      </Stack>
      <HStack
        spacing={[0, 3]}
        className="space-y-7 md:space-y-0"
        flexDirection={['column', 'row']}
        alignItems={'flex-start'}
      >
        <TopRecord
          title={'Top Location'}
          type={'locations'}
          data={topLocations}
          colors={colors}
          series={series}
        />
        <TopRecord
          title={'Top Referral source'}
          type={'sources'}
          data={sources}
          colors={sourceColors}
          series={topRefSeries}
        />
      </HStack>
      <CustomDatePicker
        setChartData={setChartData}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Stack>
  );
};

export default Analytics;
