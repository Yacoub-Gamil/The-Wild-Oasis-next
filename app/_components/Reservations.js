import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservations({ cabin }) {
  const [setting, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className=" grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector setting={setting} cabin={cabin} bookedDates={bookedDates} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservations;
