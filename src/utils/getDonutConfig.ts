import type { ApexOptions } from 'apexcharts';

import {
  FbLogo,
  FinlandFlag,
  GermanyFlag,
  GhanaFlag,
  GoogleLogo,
  IGLogo,
  LinkedInLogo,
  NigeriaFlag,
  UkFlag,
} from '@/components/svg';

export const countriesMock = {
  nigeria: {
    flag: NigeriaFlag,
    color: '#008753',
  },
  germany: {
    flag: GermanyFlag,
    color: '#030303',
  },
  ghana: {
    flag: GhanaFlag,
    color: '#FAB70A',
  },
  finland: {
    flag: FinlandFlag,
    color: '#599EEA',
  },
  'united kingdom': {
    flag: UkFlag,
    color: '#C8102E',
  },
};

export const sourcesMock = {
  facebook: {
    logo: FbLogo,
    color: '#599EEA',
  },
  instagram: {
    logo: IGLogo,
    color: '#C837AB',
  },
  linkedin: {
    logo: LinkedInLogo,
    color: '#2867B2',
  },
  google: {
    logo: GoogleLogo,
    color: '#de5246',
  },
};

export const getDonutConfig = () => {
  const donutOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      y: {
        title: {
          formatter() {
            return '';
          },
        },
      },
    },
    stroke: {
      width: 0,
    },
  };

  return { options: donutOptions };
};
