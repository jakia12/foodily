export const locations = [
  {
    slug: "mimas-cafe",
    name: "Mima’s Cafe",
    type: "Coffee Shop",
    address: "20 Cooper Square, NY 10003",
    phone: "321-372-1098",
    logo: "/locations/mimas-logo.png",
    website: "https://example.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    schedule: [
      {
        id: "e1",
        date: "2025-12-16",
        open: "07:30",
        close: "13:00",
        note: "Boba Tea, Coffee, Good Times!",
      },
      {
        id: "e2",
        date: "2025-12-20",
        open: "10:00",
        close: "15:00",
        note: "Weekend Specials",
      },
    ],
    menu: [
      {
        id: "m1",
        name: "Espresso",
        desc: "Single/Double",
        price: "$1.95 / $2.44",
      },
      {
        id: "m2",
        name: "Cortadito",
        desc: "Single/Double",
        price: "$2.20 / $2.60",
      },
      {
        id: "m3",
        name: "Cappuccino",
        desc: "Single/Double",
        price: "$2.85 / $3.50",
      },
    ],
  },

  {
    slug: "the-grub-shack",
    name: "The Grub Shack",
    type: "Food Truck",
    address: "5501 Broadway, New York",
    phone: "(123) 456-7890",
    logo: "/locations/grub-logo.png",
    website: "https://example.com",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    schedule: [
      {
        id: "g1",
        date: "2025-12-18",
        open: "11:00",
        close: "18:00",
        note: "Burgers & Fries",
      },
    ],
    menu: [
      {
        id: "gm1",
        name: "Smash Burger",
        desc: "Double patty + fries",
        price: "$12.00",
      },
      {
        id: "gm2",
        name: "Chicken Wrap",
        desc: "Spicy sauce",
        price: "$9.50",
      },
    ],
  },

  {
    slug: "sunset-tacos",
    name: "Sunset Tacos",
    type: "Mexican Street Food",
    address: "14 Bedford Ave, Brooklyn, NY",
    phone: "917-555-2211",
    logo: "/locations/sunset-tacos.png",
    website: "https://example.com",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    schedule: [
      {
        id: "s1",
        date: "2025-12-17",
        open: "12:00",
        close: "20:00",
        note: "Taco Tuesday Vibes",
      },
      {
        id: "s2",
        date: "2025-12-21",
        open: "14:00",
        close: "22:00",
        note: "Late Night Tacos",
      },
    ],
    menu: [
      { id: "st1", name: "Beef Taco", desc: "Corn tortilla", price: "$4.00" },
      {
        id: "st2",
        name: "Chicken Taco",
        desc: "Chipotle sauce",
        price: "$4.50",
      },
      { id: "st3", name: "Nachos", desc: "Cheese & salsa", price: "$7.00" },
    ],
  },

  {
    slug: "urban-brew-lab",
    name: "Urban Brew Lab",
    type: "Specialty Coffee",
    address: "88 Spring St, Soho, NY",
    phone: "646-222-8899",
    logo: "/locations/urban-brew.png",
    website: "https://example.com",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    schedule: [
      {
        id: "u1",
        date: "2025-12-19",
        open: "08:00",
        close: "16:00",
        note: "Pour-over Day",
      },
    ],
    menu: [
      { id: "ub1", name: "Flat White", desc: "Silky milk", price: "$4.25" },
      { id: "ub2", name: "Cold Brew", desc: "18h steeped", price: "$4.75" },
    ],
  },

  {
    slug: "green-bowl-kitchen",
    name: "Green Bowl Kitchen",
    type: "Healthy Eats",
    address: "301 Hudson St, NY",
    phone: "212-888-3344",
    logo: "/locations/green-bowl.png",
    website: "https://example.com",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    schedule: [
      {
        id: "gb1",
        date: "2025-12-18",
        open: "09:00",
        close: "17:00",
        note: "Fresh Bowls & Smoothies",
      },
    ],
    menu: [
      {
        id: "gbm1",
        name: "Avocado Bowl",
        desc: "Quinoa base",
        price: "$10.50",
      },
      {
        id: "gbm2",
        name: "Berry Smoothie",
        desc: "No sugar added",
        price: "$6.00",
      },
    ],
  },

  {
    slug: "midnight-pizza-van",
    name: "Midnight Pizza Van",
    type: "Pizza Truck",
    address: "Times Square Area, NY",
    phone: "929-777-9090",
    logo: "/locations/midnight-pizza.png",
    website: "https://example.com",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    schedule: [
      {
        id: "mp1",
        date: "2025-12-20",
        open: "18:00",
        close: "02:00",
        note: "Late Night Pizza",
      },
    ],
    menu: [
      {
        id: "mpm1",
        name: "Margherita Slice",
        desc: "Classic",
        price: "$4.00",
      },
      {
        id: "mpm2",
        name: "Pepperoni Slice",
        desc: "Extra cheese",
        price: "$4.50",
      },
    ],
  },
];

export function getLocationBySlug(slug) {
  return locations.find((l) => l.slug === slug);
}
