
'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

const [open, setOpen]=useState();
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
  { label: "Menu/Food Trucks", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

  return (
    <header className="sticky top-0 z-50 w-full  bg-white/90 backdrop-blur">
      <nav className="mx-auto flex py-[30] max-w-7xl items-center justify-between px-4 sm:px-6">
     
        <a href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-100">
           
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 13h16" />
              <path d="M6 7h12" />
              <path d="M7 13l-1 6" />
              <path d="M17 13l1 6" />
              <path d="M9 19h6" />
            </svg>
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-900">
            Foodily
          </span>
        </a>

     {/* for desktop */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((l) => (
          <Link 
          key={l.href}
          href={l.href}
          className=' className="text-sm font-medium text-slate-900 transition hover:text-[#8F2E2F]'>
            
          {l.label}
            
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link
            href="/order"
           
          >
           <button className="btn-hover color-2 rounded-full px-6 py-3 font-semibold">
  Order Now
</button>
          </Link>
           

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white
                       text-slate-900 shadow-sm hover:bg-slate-50"
          >
            {/* Hamburger icon */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6 18 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                
                 onClick={()=>setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                >
                  {l.label}
                </Link>
              ))}

               <Link
            href="/order"
           
          >
           <button className="btn-hover color-2 rounded-full px-6 py-3 font-semibold">
  Order Now
</button>
          </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar