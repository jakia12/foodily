import Image from "next/image";
import Link from "next/link";

export default function LocationCard({ location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group anim block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            src={location.logo}
            alt={location.name}
            fill
            className="object-contain p-2 w-"
          />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            {location.type.toUpperCase()}
          </p>
          <h3 className="mt-1 truncate text-lg font-extrabold text-slate-900">
            {location.name}
          </h3>
          <p className="mt-1 truncate text-sm text-slate-600">
            {location.address}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">
          View Calendar
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {location.schedule?.length || 0} dates
        </span>
      </div>

      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-400 opacity-0 transition group-hover:opacity-100" />
    </Link>
  );
}
