import ChartOne from "@/components/dashboard/home/ChartOne";
import { BarChartData } from "@/constants/data";
import DashboardLayout from "@/layouts/dasboard";
import Table from "@/components/dashboard/home/Table";
import Analytics from "@/components/dashboard/home/Analytics";

export default function Dashboard() {
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
          <Analytics />

          <div className="bg-white rounded-xl p-5 w-full flex flex-col gap-5">
            <h1 className="text-gray-700">Bar Chart</h1>
            <ChartOne chartData={BarChartData.chartData} />
          </div>

          <div className="bg-white mt-8 rounded-xl relative py-5 w-full flex flex-col gap-5 mb-10">
            <div className="sticky top-0">
              <h1 className="text-gray-700 px-5">Table</h1>
            </div>
            <Table />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
