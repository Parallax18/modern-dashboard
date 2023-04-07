export type TGraph = {
  [key: string]: number;
};
export type TTopLocation = {
  country: string;
  count: number;
  percent: number;
};

export type TTopSource = {
  source: string;
  count: number;
  percent: number;
};

export type TAnalyticsData = {
  graph_data: { views: TGraph };
  top_locations: TTopLocation[];
  top_sources: TTopSource[];
};
