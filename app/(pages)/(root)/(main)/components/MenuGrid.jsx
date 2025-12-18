import Image from "next/image";

const items = [
  {
    id: 1,
    title: "FRIED POTATOES",
    price: 15,
    img: "/menu/special-1.jpg",
  },
  {
    id: 2,
    title: "SHAWARMA",
    price: 15,
    img: "/menu/special-2.jpg",
  },
  {
    id: 3,
    title: "PIZZA",
    price: 15,
    img: "/menu/special-3.jpg",
  },
  {
    id: 4,
    title: "BURGER",
    price: 15,
    img: "/menu/special-4.jpg",
  },
  {
    id: 5,
    title: "SANDWICH",
    price: 15,
    img: "/menu/special-5.jpg",
  },
  {
    id: 6,
    title: "FRIED CHICKEN",
    price: 15,
    img: "/menu/special-6.jpg",
  },
];

export default function MenuGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-black">
              Our most valuable asset
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight  text-black sm:text-3xl">
              Today’s Specials
            </h2>
          </div>
        </div>
        {/* Grid wrapper (Flexbox) */}
        <div className="flex flex-wrap gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                w-full
                sm:w-[calc(50%-16px)]
                lg:w-[calc(33.333%-21.333px)]
              "
            >
              <div className="border border-dashed border-slate-300 p-5">
                {/* Image */}
                <div className="relative aspect-4/3  w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px"
                    className="object-cover"
                  />
                </div>

                {/* Bottom row */}
                <div className="mt-5 flex items-end justify-between gap-4">
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-base font-semibold text-slate-900">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
