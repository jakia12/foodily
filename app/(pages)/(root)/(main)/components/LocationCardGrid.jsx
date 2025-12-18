import { locations } from "../data/calendarData";
import LocationCard from "./LocationCard";

export default function LocationCardGrid() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
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
