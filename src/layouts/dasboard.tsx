"use client";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import { useRouter } from "next/navigation";

type DashboardLayoutProps = {
  children: ReactNode;
  pageTitle: String;
};

export default function DashboardLayout({
  children,
  pageTitle,
}: DashboardLayoutProps) {
  return (
    <main className="w-full">
      <div className="relative w-full">
        <Sidebar />
        <Navbar pageTitle={pageTitle} />
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
