import { navStore } from "@/store/nav";
import React from "react";

const Navbar = ({ pageTitle }: any) => {
  const { open, toggleOpen } = navStore();
  return (
    <nav className="w-full flex items-center justify-between md:items-end md:justify-end md:px-24 px-5 py-4 bg-[#F9F9FA]">
      <i
        className="ri-menu-2-line text-2xl md:hidden flex"
        onClick={toggleOpen}
      ></i>

      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
          <h1 className="text-xs font-semibold">P</h1>
        </div>
        <h6 className="font-semibold text-xs">Pelumi Isola</h6>
      </div>
    </nav>
  );
};

export default Navbar;
