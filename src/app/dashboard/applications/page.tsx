"use client";
import DashboardLayout from "@/layouts/dasboard";
import Table from "@/components/dashboard/home/Table";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Applications() {
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      toast.error("Error fetching applications!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
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

          <section className="mt-8">
            <div className="bg-white mt-8 rounded-xl relative py-5 w-full flex flex-col gap-5 mb-10">
              <div className="sticky top-0">
                <h1 className="text-gray-700 px-5">
                  <Skeleton width={100} />
                </h1>
              </div>
              <Skeleton height={400} /> {/* Skeleton for the table */}
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
        <p className="text-sm text-gray-600 py-2">Manage job application</p>

        <section className="mt-8">
          <div className="bg-white mt-8 rounded-xl relative py-5 w-full flex flex-col gap-5 mb-10">
            <div className="sticky top-0">
              <h1 className="text-gray-700 px-5">All Applications</h1>
            </div>
            <Table />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
