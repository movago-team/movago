export type RouteItem = {
  image: string;
  from: string;
  to: string;
  price: string;
};

export const routes: RouteItem[] = [
  {
    image: "/movago/routes/route-1.png",
    from: "Suvarnabhumi Airport",
    to: "Sukhumvit",
    price: "1,990",
  },
  {
    image: "/movago/routes/route-2.png",
    from: "Suvarnabhumi Airport",
    to: "Silom / Sathorn",
    price: "1,990",
  },
  {
    image: "/movago/routes/route-3.png",
    from: "Suvarnabhumi Airport",
    to: "Riverside",
    price: "2,190",
  },
  {
    image: "/movago/routes/route-4.png",
    from: "Bangkok",
    to: "Pattaya",
    price: "4,900",
  },
  {
    image: "/movago/routes/route-5.png",
    from: "Bangkok",
    to: "Hua Hin",
    price: "5,500",
  },
];
