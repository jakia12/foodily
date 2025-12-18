"use client";

import { useMemo, useState } from "react";
import EventDetailsModal from "./EventDetailsModal";
import MenuModal from "./MenuModal";

function formatMonthTitle(date) {
  return date.toLocaleString(undefined, { month: "long", year: "numeric" });
}

function toISO(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function CalendarGrid({ location }) {
  const [viewDate, setViewDate] = useState(() => new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const eventsByDate = useMemo(() => {
    const map = {};
    (location.schedule || []).forEach((e) => {
      map[e.date] = map[e.date] ? [...map[e.date], e] : [e];
    });
    return map;
  }, [location]);

  const days = useMemo(() => {
    const first = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const last = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
    const startWeekday = (first.getDay() + 6) % 7; // Monday start

    const arr = [];
    for (let i = 0; i < startWeekday; i++) arr.push(null);
    for (let d = 1; d <= last.getDate(); d++) {
      arr.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), d));
    }
    return arr;
  }, [viewDate]);

  const openDetails = (event) => setSelectedEvent(event);

  const openMenuSmooth = () => {
    // close details, then open menu (smooth)
    setSelectedEvent(null);
    setTimeout(() => setMenuOpen(true), 120);
  };

  return (
    <>
      {/* Calendar header */}
      <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <button
          onClick={() =>
            setViewDate(
              new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)
            )
          }
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          ← Prev
        </button>

        <div className="text-center">
          <p className="text-sm font-extrabold text-slate-900">
            {formatMonthTitle(viewDate)}
          </p>
          <p className="text-xs text-slate-500">
            Click an event to view details
          </p>
        </div>

        <button
          onClick={() =>
            setViewDate(
              new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)
            )
          }
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Next →
        </button>
      </div>

      {/* Week header */}
      <div className="mt-5 grid grid-cols-7 gap-2 text-xs font-semibold text-slate-500">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} className="px-2 py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {days.map((dateObj, idx) => {
          const iso = dateObj ? toISO(dateObj) : null;
          const dayEvents = iso ? eventsByDate[iso] || [] : [];

          return (
            <div
              key={idx}
              className="min-h-[110px] rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"
            >
              {dateObj ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      {dateObj.getDate()}
                    </span>
                  </div>

                  <div className="mt-2 space-y-2">
                    {dayEvents.slice(0, 2).map((ev) => (
                      <button
                        key={ev.id}
                        onClick={() => openDetails(ev)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-left text-xs font-semibold text-slate-800 hover:bg-slate-100"
                      >
                        <div className="truncate">{location.name}</div>
                        <div className="mt-1 text-[11px] text-slate-600">
                          {ev.open} - {ev.close}
                        </div>
                      </button>
                    ))}

                    {dayEvents.length > 2 ? (
                      <div className="text-[11px] font-semibold text-slate-500">
                        +{dayEvents.length - 2} more
                      </div>
                    ) : null}
                  </div>
                </>
              ) : (
                <div className="h-full w-full rounded-xl bg-slate-50" />
              )}
            </div>
          );
        })}
      </div>

      {/* Details Modal */}
      <EventDetailsModal
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onOpenMenu={openMenuSmooth}
        location={location}
        event={selectedEvent}
      />

      {/* Menu Modal */}
      <MenuModal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        location={location}
      />
    </>
  );
}
