import React from "react";
import { ProductListProps } from "../types/type";

const ProductItem = ({
  image,
  model,
  type,
  status,
  price,
}: ProductListProps) => {
  return (
    <>
      <article className="bg-white rounded-3xl border border-slate-100 p-5 space-y-5 shadow-sm">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>150M • 4.6 ⭐</span>
          <button
            aria-label="Add to Favorites"
            className="text-slate-400 hover:text-rose-500 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.542 0-2.91.793-3.75 2.001-.84-1.208-2.208-2.001-3.75-2.001C6.223 3.75 4.125 5.765 4.125 8.25c0 7.22 7.125 9.75 7.125 9.75s7.125-2.53 7.125-9.75z"
              />
            </svg>
          </button>
        </div>
        <img src={image} alt="Audi A4" className="w-full h-36 object-contain" />
        <div>
          <p className="font-semibold text-lg text-slate-900">{model}</p>
          <p className="text-sm text-slate-500">{type}</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="px-3 py-1 bg-slate-100 rounded-md text-sm">
            3 to 6 days:24 Dollar
          </span>
          <span className="px-3 py-1 bg-slate-100 rounded-md text-sm">
            7 to 21 days: 62 Dollar
          </span>
          <span className="px-3 py-1 bg-slate-100 rounded-md text-sm">
            More than 21 days: 75 Dollar
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">{status}</span>
          <span className="text-lg font-semibold">
            {price}${" "}
            <span className="text-sm font-normal text-slate-500">/ Time</span>
          </span>
        </div>
      </article>
    </>
  );
};

export default ProductItem;
