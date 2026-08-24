"use client";

import { useState } from "react";

import HeroSection from "@/components/home/herosection";
import BookingSection from "@/components/home/bookingsection";
import WhySection from "@/components/home/whysection";
import VehicleSection from "@/components/home/vehiclesection";
import RoutesSection from "@/components/home/routesection";
import CorporateSection from "@/components/home/corporatesection";
import Footer from "@/components/layout/footer-temp";

export default function HomePage() {
  const [vehicle, setVehicle] = useState("");

  const selectVehicle = (vehicleName: string) => {
    setVehicle(vehicleName);

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <main className="site-shell">
      <HeroSection />

      <BookingSection
        vehicle={vehicle}
        onVehicleChange={setVehicle}
      />

      <WhySection />

      <VehicleSection
        onSelect={selectVehicle}
      />

      <RoutesSection />

      <CorporateSection />

      <Footer />
    </main>
  );
}
