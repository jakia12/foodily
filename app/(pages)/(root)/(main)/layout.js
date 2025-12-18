import "@/app/globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Libre_Caslon_Text, Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-caslon",
});

export const metadata = {
  title: "Foodily",
  description:
    "Discover local food trucks and cafés, explore menus, track live locations, and check daily schedules with Foodily’s interactive food calendar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${libreCaslon.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Toaster position="top-right" richColors closeButton duration={4000} />
        <Footer />
      </body>
    </html>
  );
}
