"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <aside className="bg-white rounded-3xl shadow-sm border border-slate-100 w-full lg:w-80 p-6 space-y-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Filter Results</p>
            <p className="text-xl text-slate-900 font-semibold">
              Search Customization
            </p>
          </div>
          <button className="text-sm text-slate-400 hover:text-slate-600 cursor-pointer">
            Reset
          </button>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold text-slate-500">Rent Category</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <button className="px-4 py-2 rounded-2xl bg-slate-900 text-white font-semibold cursor-pointer">
              Daily
            </button>
            <button className="px-4 py-2 rounded-2xl border border-slate-200 cursor-pointer">
              An Hour
            </button>
            <button className="px-4 py-2 rounded-2xl border border-slate-200 cursor-pointer">
              Monthly
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
            <span>Only Available Cars</span>
            <label
              className="relative inline-flex items-center cursor-pointer"
              htmlFor=""
            >
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <div className="w-11 h-6 bg-slate-200 peer-checked:bg-brand rounded-full transition"></div>
              <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow peer-checked:right-5 transition"></div>
            </label>
          </div>
        </div>
        <div>
          <p>Hourly price range</p>
          <div>Price chart</div>
          <div>
            <span>from 18$</span>
            <span>to 100$</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Dashboard;
