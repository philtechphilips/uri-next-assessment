import { AnalyticsProps } from "@/types/dashboard";
import React from "react";

const Analytics: React.FC<AnalyticsProps> = ({ dashboardData }) => {
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-2 md:gap-8 pb-10">
      <div className="bg-white md:w-64 w-[47%] rounded-lg border p-5">
        <h6 className="text-sm">Total Applications</h6>
        <h4 className="pt-2 font-semibold text-lg">
          {dashboardData?.totalApplications}
        </h4>
      </div>

      <div className="bg-white md:w-64 w-[47%] rounded-lg border p-5">
        <h6 className="text-sm">Accepted Applications</h6>
        <h4 className="pt-2 font-semibold text-lg">
          {dashboardData?.statusCounts?.accepted}
        </h4>
      </div>

      <div className="bg-white md:w-64 w-[47%] rounded-lg border p-5">
        <h6 className="text-sm">Pending Applications</h6>
        <h4 className="pt-2 font-semibold text-lg">
          {dashboardData?.statusCounts?.pending}
        </h4>
      </div>

      <div className="bg-white md:w-64 w-[47%] rounded-lg border p-5">
        <h6 className="text-sm">Rejected Applications</h6>
        <h4 className="pt-2 font-semibold text-lg">
          {dashboardData?.statusCounts?.rejected}
        </h4>
      </div>
    </div>
  );
};

export default Analytics;
