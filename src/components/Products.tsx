import ProductItem from "./ProductItem";
import { ProductListProps } from "../types/type";
import Link from "next/link";
const Products = async () => {
  const result = await fetch(`http://localhost:3009/products`);
  const data = (await result.json()) as ProductListProps[];
  return (
    <>
      <main className="flex-1 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">
              San Francisco area · Updated 5 minutes ago
            </p>
            <h1 className="text-3xl font-semibold text-slate-900">
              Vehicles available
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-2xl border border-slate-200 text-sm hover:border-slate-400 cursor-pointer">
              The closest to me
            </button>
            <button className="px-4 py-2 rounded-2xl border border-slate-200 text-sm hover:border-slate-400 cursor-pointer">
              Show map
            </button>
            <button className="px-4 py-2 rounded-2xl bg-black text-white text-sm font-semibold cursor-pointer">
              Add a Vehicle
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.map((item) => (
            <Link key={item.id} href={`store/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Products;
