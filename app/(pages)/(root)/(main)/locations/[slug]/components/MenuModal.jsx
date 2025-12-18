"use client";

import { X } from "lucide-react";
import Image from "next/image";

export default function MenuModal({ open, onClose, location }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <Image
                  src={location.logo}
                  alt={location.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  MENU
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

          {/* Scroll list */}
          <div className="max-h-[60vh] overflow-auto px-5 pb-5">
            <div className="space-y-3">
              {location.menu.map((m) => (
                <div
                  key={m.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-extrabold text-slate-900">
                        {m.name}
                      </p>
                      {m.desc ? (
                        <p className="mt-1 text-xs text-slate-600">{m.desc}</p>
                      ) : null}
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      {m.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 p-4">
            <button
              onClick={onClose}
              className="w-full rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
