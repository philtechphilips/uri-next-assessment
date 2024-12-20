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
import StatusChart from "@/components/dashboard/home/StatusChart";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState();
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchDashBoardData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/stats`,
      );
      setDashboardData(response.data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      toast.error("Error fetching data!");
      setLoading(false); // Set loading to false in case of error
    }
  };

  useEffect(() => {
    fetchDashBoardData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout pageTitle="Dashboard">
        <div className="w-full md:pl-[260px] px-5 bg-[#F9F9FA] min-h-screen overflow-x-scroll pr-5">
          <h2 className="font-semibold text-2xl text-gray-800">
            <Skeleton width={200} />
          </h2>
          <p className="text-sm text-gray-600 py-2">
            <Skeleton width={150} />
          </p>

          <section className="mt-20">
            <Skeleton height={200} />
            <div className="flex md:flex-row flex-col gap-2 mb-16">
              <div className="bg-white rounded-xl p-5 md:w-3/5 flex flex-col gap-5">
                <h1 className="text-gray-700">
                  <Skeleton width={100} />
                </h1>
                <Skeleton height={250} />
              </div>
              <div className="bg-white rounded-xl p-5 md:w-2/5 flex flex-col gap-5">
                <h1 className="text-gray-700">
                  <Skeleton width={150} />
                </h1>
                <Skeleton height={250} />
              </div>
            </div>
          </section>
        </div>
      </DashboardLayout>
    );
  }

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

          <div className="flex md:flex-row flex-col gap-2 mb-16">
            <div className="bg-white rounded-xl p-5 md:w-3/5 flex flex-col gap-5">
              <h1 className="text-gray-700">Applications</h1>
              <ChartOne chartData={dashboardData} />
            </div>

            <div className="bg-white rounded-xl p-5 md:w-2/5 flex flex-col gap-5">
              <h1 className="text-gray-700">Applications By Status</h1>
              <StatusChart />
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
