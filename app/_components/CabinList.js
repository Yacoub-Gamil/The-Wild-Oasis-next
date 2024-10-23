import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ filter }) {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;
  //1 All Cabins
  if (filter === "all") displayedCabins = cabins;

  //1 Samll Cabins
  if (filter === "samll")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

  //Medium Cabins
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity < 7
    );

  //Large Cabins
  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity > 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
