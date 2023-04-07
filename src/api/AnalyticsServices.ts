import type { TAnalyticsData } from './models/analytics-data';
import { HttpClient } from './utils/http';

export const AnalyticsServices = Object.freeze({
  getAnalyticsData: (): Promise<TAnalyticsData> => HttpClient.get({ url: '/' }),
});
