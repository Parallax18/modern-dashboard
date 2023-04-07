import type { ApexOptions } from 'apexcharts';

export const getChartConfig = ({
  categories,
  views,
}: {
  categories: string[];
  views: number[];
}) => {
  const chartOptions: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      fontFamily: 'inherit',
      background: 'none',
      foreColor: '#4D5760',
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        gradientToColors: ['#fff'],
        opacityTo: 0.7,
        stops: [0, 90, 100],
      },
      colors: ['#FF5403'],
    },
    stroke: {
      curve: 'straight',
      width: 2,
      colors: ['#FF5403'],
    },
    xaxis: {
      categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        // show: true,
        style: {
          fontFamily: 'inherit',
          fontSize: '14',
        },
      },
    },
    grid: {
      borderColor: '#DBDEE5',
      strokeDashArray: 4,
    },
    noData: {
      text: 'No data to display',
      style: {
        color: '#0d0d0d',
      },
    },
  };

  const chartSeriesData = [
    {
      name: 'views',
      data: views,
    },
  ];

  return { options: chartOptions, series: chartSeriesData };
};
