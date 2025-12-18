import Image from "next/image";
import Link from "next/link";

const TruckCard = ({ truck }) => {
  return (
    <>
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#8F2E2F] transition hover:bg-[#6C2121]">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={truck.image}
            alt={truck.name}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px"
            className="object-cover transition duration-500 group-hover:scale-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Time chip */}
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#000] px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
            {truck.time}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-extrabold text-white mb-1">
            {truck.name}
          </h3>
          <p className="mt-1 text-sm text-white/75">{truck.location}</p>

          {/* tags content here */}
          <div className="mt-4 flex flex-wrap gap-2">
            {truck.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <Link href="/menu">
              <button className="btn-hover color-2 rounded-full px-6 py-2 font-semibold">
                View Menu
              </button>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold
                       text-white/90 ring-1 ring-white/20 hover:bg-white/5 hover:ring-white/30 transition"
            >
              Find
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TruckCard;
