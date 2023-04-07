/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
import { eachDayOfInterval, format, subDays } from 'date-fns';

import { useAnalyticsData } from '@/api/hooks/use-analytics-data';
import type { TGraph } from '@/api/models/analytics-data';
import type {
  TGetDatesAndValues,
  THandleCustomDateRangeArgType,
  THandleDataArgType,
  THandleDataReturnType,
  THandleSelectedViewArgType,
} from '@/types/chart-data';

// get dates and values for numerical views
const getDatesAndValues = (numDays: number): TGetDatesAndValues => {
  const data = {};
  for (let i = 0; i < numDays; i++) {
    const date = subDays(new Date(), i);
    const randomValue = Math.floor(Math.random() * 500) + 1;
    // @ts-ignore
    data[date] = randomValue;
  }
  return data;
};

// Handle data and organize data for the chart
const handleData = (data: THandleDataArgType): THandleDataReturnType => {
  let viewData: THandleDataReturnType = [];
  if (data) {
    viewData = Object.entries(data).map(([date, viewsOnDate]) => ({
      category: format(new Date(date), 'dd MMM'),
      value: viewsOnDate,
    }));
  }
  return viewData;
};

// handle date range for custom dates
const handleCustomDateRange = ({
  startDate,
  endDate,
}: THandleCustomDateRangeArgType): TGraph => {
  const data = {};
  const dates = eachDayOfInterval({ start: startDate, end: endDate });
  for (let i = 0; i < dates.length; i++) {
    const randomValue = Math.floor(Math.random() * 500) + 1;
    // @ts-ignore
    data[dates[i]] = randomValue;
  }
  return data;
};

export const useChartData = () => {
  const { useGetAnalytics } = useAnalyticsData();
  const { data } = useGetAnalytics();

  const handleSelectedView = ({
    view,
    viewData,
  }: THandleSelectedViewArgType) => {
    if (!isNaN(Number(view))) {
      const datesAndValues = getDatesAndValues(Number(view));
      return handleData(datesAndValues)?.reverse();
    }
    if (view === 'all') {
      // @ts-ignore
      return handleData(data.graph_data.views);
    }
    if (view === 'custom') {
      const customDateRange = handleCustomDateRange({
        startDate: viewData.startDate,
        endDate: viewData.endDate,
      });
      return handleData(customDateRange);
    }
    return [] as THandleDataReturnType;
  };
  return { handleData, handleSelectedView };
};
