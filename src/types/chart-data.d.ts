export type TGetDatesAndValues = {
  [key: string]: number;
};

export type THandleDataReturnType = {
  category: string;
  value: number;
}[];

export type THandleDataArgType = {
  [key: string]: number;
};

export type THandleCustomDateRangeArgType = {
  startDate: Date;
  endDate: Date;
};

export type THandleSelectedViewArgType = {
  view: string | number;
  viewData?: any;
};

export type TViewsChartData = {
  data: THandleDataReturnType;
  text: string;
  value: string;
};
