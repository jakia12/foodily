import ContactForm from "./components/ContactForm";
import FoodTruckCarousel from "./components/FoodTruckCarousel";
import HeroBanner from "./components/HeroBanner";
import LocationCardGrid from "./components/LocationCardGrid";
import MenuGrid from "./components/MenuGrid";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FoodTruckCarousel />
      <LocationCardGrid />
      <Partners />
      <MenuGrid />
      <ContactForm />
    </>
  );
}
