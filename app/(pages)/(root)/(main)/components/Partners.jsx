"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
  const partners = [
    { id: "p1", name: "Uber Eats", logo: "/partners/ue.png" },
    { id: "p2", name: "DoorDash", logo: "/partners/dd.png" },
    { id: "p3", name: "Grubhub", logo: "/partners/gh.png" },
    { id: "p4", name: "Postmates", logo: "/partners/pm.png" },
    { id: "p5", name: "Google pay", logo: "/partners/gp.png" },
    { id: "p6", name: "Stripe", logo: "/partners/str.png" },
    { id: "p7", name: "Google Maps", logo: "/partners/gm.jpg" },
    { id: "p8", name: "Apple Pay", logo: "/partners/ap.png" },
  ];
  return (
    <section className="relative overflow-hidden  py-14 md:py-18">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-[70px] flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-black">
              TRUSTED PARTNERS
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight  text-black sm:text-3xl">
              Available on your favorite platforms
            </h2>
          </div>
        </div>
        {/* carousel here */}
        <Swiper
          modules={[Autoplay]}
          loop
          speed={1800}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 16 },
            480: { slidesPerView: 3, spaceBetween: 18 },
            640: { slidesPerView: 4, spaceBetween: 22 },
            1024: { slidesPerView: 6, spaceBetween: 26 },
          }}
          className="partner-swiper"
        >
          {partners.map((pt) => (
            <SwiperSlide key={pt.id}>
              <Image src={pt.logo} alt={pt.name} width={100} height={100} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
