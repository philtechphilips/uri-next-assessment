"use client";
import ChartOne from "@/components/dashboard/home/ChartOne";
import { BarChartData } from "@/constants/data";
import DashboardLayout from "@/layouts/dasboard";
import Table from "@/components/dashboard/home/Table";
import Analytics from "@/components/dashboard/home/Analytics";
import axios from "axios";
import { useEffect, useState } from "react";
import { AnalyticsProps } from "@/types/dashboard";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState();

  const fetchDashBoardData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/stats`,
      );
      setDashboardData(response.data);
    } catch (error) {
      toast.error("Error fetching data!")
    }
  };

  useEffect(() => {
    fetchDashBoardData();
  }, []);

  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="w-full md:pl-[260px] px-5 bg-[#F9F9FA] min-h-screen overflow-x-scroll pr-5">
        <h2 className="font-semibold text-2xl text-gray-800">
          Hello, Pelumi Isola👋
        </h2>
        <p className="text-sm text-gray-600 py-2">
          Here is all your job application
        </p>

        <section className="mt-20">
          <Analytics dashboardData={dashboardData} />

          <div className="bg-white rounded-xl p-5 w-full flex flex-col gap-5">
            <h1 className="text-gray-700">Bar Chart</h1>
            <ChartOne chartData={dashboardData} />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
