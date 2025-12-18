import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-xl font-extrabold">Foodily</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Fresh, fast, and unforgettable street food. Follow our trucks,
              explore menus, and order in seconds.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold">Explore</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/locations"
                  >
                    Locations
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/menu"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/food-trucks"
                  >
                    Food Trucks
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-white/70 hover:text-white"
                    href="/terms"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-white/60" />
              <span>hello@foodily.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-white/60" />
              <span>+1 (000) 000-0000</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-white/60" />
              <span>Serving multiple city locations</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Foodily. All rights reserved.</p>
          <p className="text-white/40">Built with ❤️ for street food lovers</p>
        </div>
      </div>
    </footer>
  );
}
