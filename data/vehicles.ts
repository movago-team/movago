export type Vehicle = {
  id: string;
  image: string;
  category?: string;
  name: string;
  type: string;
  seats: string;
  luggage: string;
  tier: string;
  copy: string;
  price: string;
  isMock?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    id: "009",
    image: "/images/vehicles/zeekr-009.png",
    category: "EXECUTIVE LOUNGE",
    name: "ZEEKR 009",
    type: "Executive Lounge Van",
    seats: "6 Seats",
    luggage: "4 Luggage",
    tier: "VIP Class",
    copy:
      "The ultimate luxury MPV with spacious cabin, perfect for families or executive travellers.",
    price: "2,490",
  },
  {
    id: "7x",
    image: "/images/vehicles/zeekr-7x.png",
    category: "EXECUTIVE CLASS",
    name: "ZEEKR 7X",
    type: "Executive SUV",
    seats: "4 Seats",
    luggage: "3 Luggage",
    tier: "Executive Class",
    copy:
      "Premium electric SUV offering smooth, quiet and comfortable ride.",
    price: "1,990",
  },
  {
    id: "toyota-bz4x",
    image: "/images/vehicles/toyota-bz4x.png",
    category: "PREMIUM SUV",
    name: "TOYOTA BZ4X",
    type: "Premium Electric SUV",
    seats: "4 Seats",
    luggage: "4 Luggage",
    tier: "Premium Class",
    copy:
      "Reliable and efficient all-electric SUV with advanced comfort and technology.",
    price: "1,690",
  },
];
