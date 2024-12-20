import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SIDEBAR } from "@/constants/dashboard";
import { navStore } from "@/store/nav";

const Sidebar = () => {
  const { open, toggleOpen } = navStore();
  const currentPath = usePathname();
  const router = useRouter();

  return (
    <aside
      className={`w-60 bg-[#F9F9FA] border-r h-screen fixed top-0 left-0 z-[1000] transition-transform duration-300 ease-in-out 
      ${open ? "transform translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="px-5 pt-10">
        <h1 className="font-base text-xl">Job</h1>
        <h1 className="font-base text-xl">Application</h1>
      </div>

      <div className="absolute top-3 right-4" onClick={toggleOpen}>
        <i className="ri-close-large-fill text-2xl md:hidden flex"></i>
      </div>
      <div className="px-3 py-5">
        <h4 className="font-bold text-gray-700 py-5 px-2 mb-3 text-sm">Menu</h4>
        <ul className="flex flex-col gap-5">
          {SIDEBAR &&
            SIDEBAR.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 px-3 py-3 ${
                  currentPath === item?.url
                    ? `bg-[#4253F0] text-gray-50 rounded-md`
                    : "text-gray-700"
                }`}
              >
                <i className={`${item?.icon}`}></i>
                <Link href={item?.url}>
                  <p className={`text-sm`}>{item?.title}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
