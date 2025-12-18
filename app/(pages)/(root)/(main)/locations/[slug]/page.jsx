import { getLocationBySlug } from "../../data/calendarData";
import CalendarGrid from "./components/CalendarGrid";

export default async function LocationCalendarPage({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-2xl font-bold">Location not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
              LOCATION CALENDAR
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
              {location.name}
            </h1>
            <p className="mt-2 text-slate-600">{location.address}</p>
          </div>
        </div>

        <div className="mt-8">
          <CalendarGrid location={location} />
        </div>
      </div>
    </main>
  );
}
