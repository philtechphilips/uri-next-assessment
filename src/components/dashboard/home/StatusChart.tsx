"use client";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { toast } from "react-toastify";
import axios from "axios";

type DashboardData = {
  statusCounts: Record<string, number>;
};

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusChart = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null,
  );

  const fetchDashBoardData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/stats`,
      );
      setDashboardData(response.data);
    } catch (error) {
      toast.error("Error fetching data!");
    }
  };

  useEffect(() => {
    fetchDashBoardData();
  }, []);

  const pieData = {
    labels: dashboardData?.statusCounts
      ? Object.keys(dashboardData.statusCounts)
      : [],
    datasets: [
      {
        data: dashboardData?.statusCounts
          ? Object.values(dashboardData.statusCounts)
          : [],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="py-4">
      <h2 className="text-lg font-semibold text-gray-700">
        Applications Breakdown
      </h2>
      <div className="w-1/2 mx-auto">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default StatusChart;
