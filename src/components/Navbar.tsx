"use client";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Navbar = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      href: "/dailyReport",
      title: "DailyReport",
    },
  ];
  return (
    <header className="headerCss">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-lg font-semibold">
          AU
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900">Auto Ultimate</p>
          <p className="text-sm text-slate-500">
            Fleet control and reservations
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100 text-slate-600">
          48 active cars
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          System status: stable
        </div>
        <button className="px-4 py-2 rounded-2xl border border-slate-200 hover:border-slate-400 cursor-pointer">
          Daily report
        </button>
      </div>
    </header>
  );
};

export default Navbar;
