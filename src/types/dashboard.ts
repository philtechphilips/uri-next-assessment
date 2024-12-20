type DashboardData = {
  totalApplications: number;
  statusCounts: {
    accepted: number;
    pending: number;
    rejected: number;
  };
  monthCounts: Record<string, number>;
};

export type AnalyticsProps = {
  dashboardData?: DashboardData;
};
