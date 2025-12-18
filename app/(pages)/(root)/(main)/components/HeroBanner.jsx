import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#6C2121]">
      {/* Background */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6">
        <div className="flex min-h-[80vh] flex-col items-center justify-center gap-12 py-16 lg:min-h-[85vh] lg:flex-row lg:justify-between lg:py-20">
          {/*left Content */}
          <div className="w-full md:w-[45%] text-center lg:text-left">
            <p className="text-sm font-semibold tracking-[0.25em] text-white/70">
              BEST FOR YOU
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading:18 md:leading-20">
              DELICIOUS FOOD ON THE STREET.
            </h1>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-white/70 lg:mx-0" />

            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              Fresh, fast, and unforgettable flavors. Track our locations,
              browse menus, and order in seconds.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="#order">
                <button className="btn-hover color-2 rounded-full px-6 py-3 font-semibold">
                  Order Now
                </button>
              </Link>

              <Link
                href="#locations"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                           text-white/90 ring-1 ring-white/25 hover:ring-white/40 hover:bg-white/5 transition"
              >
                Find Us Today
              </Link>
            </div>
          </div>

          {/* right image */}
          <div className="relative w-full md:w-[55%] flex-shrink-0">
            <div className="absolute -inset-8 rounded-[2rem] bg-white/5 blur-3xl" />

            <Image
              src="/images/hero.png"
              alt="Food Truck"
              width={1000}
              height={1000}
              sizes="(max-width: 640px) 90vw,
         (max-width: 1024px) 70vw,
         500px"
              className="
    relative mx-auto
    w-[90%]
    sm:w-[80%]
    lg:w-full
    object-contain
    drop-shadow-2xl
  "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
