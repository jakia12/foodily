import { locations } from "../data/calendarData";
import LocationCard from "./LocationCard";

export default function LocationCardGrid() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-black">
            Available Locations
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight  text-black sm:text-3xl">
            Choose a food truck
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {locations.map((loc) => (
          <div
            key={loc.slug}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <LocationCard location={loc} />
          </div>
        ))}
      </div>
    </div>
  );
}
