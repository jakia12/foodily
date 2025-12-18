"use client";

import {
  CalendarDays,
  Clock,
  Facebook,
  Instagram,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import Image from "next/image";

export default function EventDetailsModal({
  open,
  onClose,
  onOpenMenu,
  location,
  event,
}) {
  if (!open || !event) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-start justify-between p-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <Image
                  src={location.logo}
                  alt={location.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  {location.type.toUpperCase()}
                </p>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {location.name}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="px-5 pb-4">
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CalendarDays className="h-4 w-4 text-slate-500" />
                <span className="font-semibold">{event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Clock className="h-4 w-4 text-slate-500" />
                <span className="font-semibold">
                  {event.open} - {event.close}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Phone className="h-4 w-4 text-slate-500" />
                <span className="font-semibold">{location.phone}</span>
              </div>

              {event.note ? (
                <p className="text-sm leading-relaxed text-slate-600">
                  {event.note}
                </p>
              ) : null}
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                className="rounded-full border border-slate-200 p-2 hover:bg-slate-50"
                href={location.socials.facebook}
                target="_blank"
              >
                <Facebook className="h-4 w-4 text-slate-700" />
              </a>
              <a
                className="rounded-full border border-slate-200 p-2 hover:bg-slate-50"
                href={location.socials.twitter}
                target="_blank"
              >
                <Twitter className="h-4 w-4 text-slate-700" />
              </a>
              <a
                className="rounded-full border border-slate-200 p-2 hover:bg-slate-50"
                href={location.socials.instagram}
                target="_blank"
              >
                <Instagram className="h-4 w-4 text-slate-700" />
              </a>
            </div>
          </div>

          {/* Footer buttons */}
          <div className="flex items-center justify-between gap-3 border-t border-slate-200 p-4">
            <a
              href={location.website}
              target="_blank"
              className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Website
            </a>

            <button
              onClick={onOpenMenu}
              className="flex-1 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Menu
            </button>

            <button
              onClick={onClose}
              className="flex-1 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
