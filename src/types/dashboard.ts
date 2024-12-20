type StatusCounts = {
  accepted: number;
  pending: number;
  rejected: number;
};

type MonthCount = {
  month: string;
  value: number;
};

export type AnalyticsProps = {
  totalApplications: number;
  statusCounts: StatusCounts;
  monthCounts: MonthCount[];
};
