import type { TTopLocation, TTopSource } from '@/api/models/analytics-data.d';
import {
  countriesMock,
  sourcesMock,
} from '@/utils/analytics-config-data/getDonutConfig';

const handleTopLocations = (data: TTopLocation[] | undefined) => {
  const locations = data?.map((location) => ({
    country: location.country,
    percent: location.percent,
    // @ts-ignore
    flag: countriesMock[location.country.toLowerCase()].flag,
    // @ts-ignore
    color: countriesMock[location.country.toLowerCase()].color,
  }));

  const series = data?.map((location) => location.percent);
  const colors = data?.map(
    // @ts-ignore
    (location) => countriesMock[location.country.toLowerCase()].color
  );

  return { series, locations, colors };
};

const handleTopReferralSources = (data: TTopSource[] | undefined) => {
  const sources = data?.map((item) => ({
    source: item.source,
    percent: item.percent,
    // @ts-ignore
    logo: sourcesMock[item.source.toLowerCase()]?.logo,
    // @ts-ignore
    color: sourcesMock[item.source.toLowerCase()]?.color,
  }));

  const topRefSeries = data?.map((source) => source.percent);
  const sourceColors = data?.map(
    // @ts-ignore
    (src) => sourcesMock[src.source.toLowerCase()]?.color
  );
  return { sources, topRefSeries, sourceColors };
};

export const useTopLocationData = () => {
  return { handleTopLocations, handleTopReferralSources };
};
