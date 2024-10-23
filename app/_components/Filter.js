"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const aciveFilter = searchparams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchparams);
    params.set("capacity", filter);
    console.log(params.toString());
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className=" border border-primary-800 flex ">
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          aciveFilter === "all" ? "bg-primary-800 text-primary-50" : ""
        }`}
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          aciveFilter === "samll" ? "bg-primary-800 text-primary-50" : ""
        }`}
        onClick={() => handleFilter("samll")}
      >
        1&mdash;3
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          aciveFilter === "medium" ? "bg-primary-800 text-primary-50" : ""
        }`}
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          aciveFilter === "large" ? "bg-primary-800 text-primary-50" : ""
        }`}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12
      </button>
    </div>
  );
}

export default Filter;
