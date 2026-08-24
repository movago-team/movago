"use client";

import Link from "next/link";
import { useRef } from "react";
import { routes } from "../../data/routes";

export default function RouteSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollRoutes = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".route-card") as HTMLDivElement | null;
    const step = card ? card.offsetWidth + 12 : 260;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="routes-section">
      <div className="page-width">
        <div className="routes-header">
          <div>
            <div className="section-eyebrow">POPULAR ROUTES</div>
            <h2 className="routes-title">Most Popular Routes</h2>
          </div>

          <Link href="/destinations" className="routes-view-all">
            View All Routes
          </Link>
        </div>

        <div className="routes-carousel-wrap">
          <button
            type="button"
            className="route-arrow route-arrow-left"
            onClick={() => scrollRoutes("left")}
            aria-label="Previous routes"
          >
            ‹
          </button>

          <div className="routes-track" ref={sliderRef}>
            {routes.map((route, index) => (
              <button
                type="button"
                className="route-card"
                key={index}
                onClick={() => {
                  document.getElementById("booking")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                <div className="route-image">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                  />
                </div>

                <div className="route-copy">
                  <div className="route-name">
                    {route.from}
                    <br />→ {route.to}
                  </div>

                  <div className="route-bottom">
                    <div className="route-from">From</div>
                    <div className="route-price">
                      {route.price} <span>THB</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="route-arrow route-arrow-right"
            onClick={() => scrollRoutes("right")}
            aria-label="Next routes"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
