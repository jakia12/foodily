import ContactForm from "./components/ContactForm";
import FoodTruckCarousel from "./components/FoodTruckCarousel";
import HeroBanner from "./components/HeroBanner";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FoodTruckCarousel />
      <Partners />
      <ContactForm />
    </>
  );
}
