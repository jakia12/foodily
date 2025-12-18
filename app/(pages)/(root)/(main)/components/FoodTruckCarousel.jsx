'use client'


import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TruckCard from "./TruckCard";

const FoodTruckCarousel = () => {
    const trucks = [
  {
    id: "1",
    name: "Boxcar Cantina",
    location: "Downtown • 3rd Ave",
    time: "Today 5–10 PM",
    image: "/food/tacos.jpg",
    tags: ["Tacos", "Fresh", "Spicy"],
  },
  {
    id: "2",
    name: "Smash & Dash",
    location: "Riverside Park",
    time: "Tomorrow 12–6 PM",
    image: "/food/burg.jpg",
    tags: ["Burgers", "Fries", "Combo"],
  },
  {
    id: "3",
    name: "Curry on Wheels",
    location: "City Center",
    time: "Fri 4–9 PM",  image: "/food/hotdog.jpg",
    tags: ["Curry", "Rice", "HotDog"],
  },
  {
    id: "4",
    name: "Sweet Treats",
    location: "Beach Road",
    time: "Sat 2–8 PM",
   image: "/food/dessert.jpg",
    tags: ["Dessert", "Cold", "Kids"],
  },
];
  return (
      <section className="relative overflow-hidden  py-14 md:py-18">

         <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-black">
              FOOD TRUCKS NEAR YOU
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight  text-black sm:text-3xl">
              Explore Today’s Trucks
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed  text-black">
              Swipe through trucks, check locations, and jump to the menu in one click.
            </p>
          </div>

          {/* Custom nav */}
          <div className="flex items-center gap-3">
            <button
              className="truckPrev inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#8F2E2F] text-white/90 cursor-pointer "
              aria-label="Previous"
              type="button"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              className="truckNext inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#8F2E2F] text-white/90  cursor-pointer"
              aria-label="Next"
              type="button"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

         <Swiper
       
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={18}
          slidesPerView={1}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".truckNext", prevEl: ".truckPrev" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
         {trucks.map((truck)=>(
            <SwiperSlide key={truck.id}>
             <TruckCard truck={truck}></TruckCard>
            </SwiperSlide>
         ))}
        


       </Swiper>
       </div>

       {/* carousel here */}

      
      </section>
  )
}

export default FoodTruckCarousel