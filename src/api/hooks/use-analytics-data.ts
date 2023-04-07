import { useQuery } from '@tanstack/react-query';

import { AnalyticsServices } from '../AnalyticsServices';

export const useAnalyticsData = () => {
  const useGetAnalytics = () =>
    useQuery(['analytics data'], AnalyticsServices.getAnalyticsData, {
      onSuccess: () => {},
      onError: () => {},
    });

  return { useGetAnalytics };
};
