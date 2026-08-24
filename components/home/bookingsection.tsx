"use client";

import { FormEvent, useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "airport" | "hourly" | "intercity";

type BookingSectionProps = {
  vehicle: string;
  onVehicleChange: (vehicle: string) => void;
};

export default function BookingSection({
  vehicle,
  onVehicleChange,
}: BookingSectionProps) {
  const [tab, setTab] = useState<Tab>("airport");
  const [message, setMessage] = useState("");

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("Searching available premium vehicles for your trip…");

    window.setTimeout(() => {
      setMessage(
        "Available vehicles found. Choose a vehicle below to continue."
      );
    }, 650);
  };

  return (
    <section className="booking-wrap" id="booking">
      <div className="booking-card">

        {/* Tabs */}
        <div className="booking-tabs" role="tablist">
          <button
            type="button"
            className={tab === "airport" ? "active" : ""}
            onClick={() => setTab("airport")}
          >
            <Icon name="plane" />
            Airport Transfer
          </button>

          <button
            type="button"
            className={tab === "hourly" ? "active" : ""}
            onClick={() => setTab("hourly")}
          >
            <Icon name="clock" />
            Hourly Service
          </button>

          <button
            type="button"
            className={tab === "intercity" ? "active" : ""}
            onClick={() => setTab("intercity")}
          >
            <Icon name="car" />
            Intercity Transfer
          </button>
        </div>

        {/* Booking Form */}
        <form className="booking-grid" onSubmit={submitBooking}>

          {/* From */}
          <label>
            From

            <div className="field-with-icon">
              <Icon name="plane" />

              <select defaultValue="bkk">
                <option value="bkk">
                  Suvarnabhumi Airport (BKK)
                </option>

                <option value="dmk">
                  Don Mueang Airport (DMK)
                </option>

                <option value="hotel">
                  Bangkok Hotel
                </option>
              </select>
            </div>
          </label>

          {/* To */}
          <label>
            To

            <div className="field-with-icon">
              <Icon name="pin" />

              <input
                key={tab}
                defaultValue={
                  tab === "intercity"
                    ? "Pattaya"
                    : "Sukhumvit, Bangkok"
                }
              />
            </div>
          </label>

          {/* Date */}
          <label>
            Date

            <input
              type="date"
              defaultValue="2025-05-25"
            />
          </label>

          {/* Time */}
          <label>
            Time

            <select defaultValue="10:00">
              <option value="08:00">08:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="18:00">06:00 PM</option>
            </select>
          </label>

          {/* Vehicle */}
          <label>
            Vehicle

            <select
              value={vehicle}
              onChange={(event) =>
                onVehicleChange(event.target.value)
              }
            >
              <option value="">
                Select Vehicle
              </option>

              <option value="ZEEKR 009">
                ZEEKR 009
              </option>

              <option value="ZEEKR 7X">
                ZEEKR 7X
              </option>
            </select>
          </label>

          {/* Search */}
          <button
            className="gold-btn search-btn"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* Benefits */}
        <div className="booking-benefits">
          <span>
            ✓ Free 60 mins waiting time
          </span>

          <span>
            ✓ All tolls &amp; parking included
          </span>

          <span>
            ✓ Professional chauffeur
          </span>

          <span>
            ✓ 24/7 Customer Support
          </span>
        </div>

        {/* Search Result */}
        {message && (
          <div className="search-message">
            {message}
          </div>
        )}

      </div>
    </section>
  );
}
