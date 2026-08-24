'use client';

import { useEffect, useMemo, useState } from 'react';
import cars from '../data/car';
import {
  CATEGORIES,
  MAX_RENTAL_DAYS,
  addDays,
  calculateTotal,
  rentalDaysInclusive,
  startOfDay,
} from './rental-utils';

type Car = {
  id: string;
  brand: string;
  model: string;
  category: string;
  seats: number;
  transmission: string;
  price_per_day: number;
  currency: string;
  is_available: boolean;
  image_url: string;
};

const WEEKDAYS = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'] as const;

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isBeforeDay(a: Date, b: Date) {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

function isInRange(date: Date, start: Date, end: Date) {
  const time = startOfDay(date).getTime();
  return time >= startOfDay(start).getTime() && time <= startOfDay(end).getTime();
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDateThai(date: Date) {
  return new Intl.DateTimeFormat('th-TH', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function formatMonthYear(date: Date) {
  return new Intl.DateTimeFormat('th-TH', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days: (Date | null)[] = [];

  for (let i = 0; i < firstDay.getDay(); i += 1) {
    days.push(null);
  }

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    days.push(new Date(year, month, day));
  }

  return days;
}

type RentalCalendarProps = {
  startDate: Date | null;
  endDate: Date | null;
  viewMonth: Date;
  onViewMonthChange: (date: Date) => void;
  onRangeChange: (start: Date, end: Date) => void;
  onRangeClear: () => void;
};

function RentalCalendar({
  startDate,
  endDate,
  viewMonth,
  onViewMonthChange,
  onRangeChange,
  onRangeClear,
}: RentalCalendarProps) {
  const today = startOfDay(new Date());
  const [pendingStart, setPendingStart] = useState<Date | null>(null);

  const calendarDays = getCalendarDays(viewMonth.getFullYear(), viewMonth.getMonth());

  const handleDateClick = (date: Date) => {
    if (isBeforeDay(date, today)) return;

    if (!pendingStart) {
      if (startDate !== null) {
        onRangeClear();
      }
      setPendingStart(date);
      return;
    }

    if (isSameDay(date, pendingStart)) {
      setPendingStart(null);
      onRangeChange(date, date);
      return;
    }

    let start = pendingStart;
    let end = date;

    if (isBeforeDay(end, start)) {
      [start, end] = [end, start];
    }

    const days = rentalDaysInclusive(start, end);
    if (days > MAX_RENTAL_DAYS) {
      end = addDays(start, MAX_RENTAL_DAYS - 1);
    }

    setPendingStart(null);
    onRangeChange(start, end);
  };

  const goToPrevMonth = () => {
    onViewMonthChange(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    onViewMonthChange(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1));
  };

  const hasSelection = startDate !== null && endDate !== null;
  const rangeStart = pendingStart ?? startDate;
  const rangeEnd = pendingStart ? null : endDate;

  return (
    <div className="rounded-xl border border-orange-100 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={goToPrevMonth}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-orange-600 hover:bg-orange-50"
          aria-label="เดือนก่อนหน้า"
        >
          ‹
        </button>
        <p className="text-sm font-semibold text-orange-950">{formatMonthYear(viewMonth)}</p>
        <button
          type="button"
          onClick={goToNextMonth}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-orange-600 hover:bg-orange-50"
          aria-label="เดือนถัดไป"
        >
          ›
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-1 text-center text-xs font-medium text-orange-300">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }

          const isPast = isBeforeDay(date, today);
          const isStart = rangeStart !== null && isSameDay(date, rangeStart);
          const isEnd = rangeEnd !== null && isSameDay(date, rangeEnd);
          const inRange =
            hasSelection &&
            !pendingStart &&
            startDate !== null &&
            endDate !== null &&
            isInRange(date, startDate, endDate) &&
            !isSameDay(startDate, endDate);
          const isSelected = isStart || isEnd;

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={isPast}
              onClick={() => handleDateClick(date)}
              className={`aspect-square rounded-lg text-sm transition-colors ${
                isPast
                  ? 'cursor-not-allowed text-orange-200'
                  : isSelected
                    ? 'bg-orange-500 font-semibold text-white'
                    : inRange
                      ? 'bg-orange-100 text-orange-700'
                      : 'text-orange-950 hover:bg-orange-50'
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-orange-700/60">
        คลิกวันเริ่มต้น แล้วคลิกวันสิ้นสุด (สูงสุด {MAX_RENTAL_DAYS} วัน)
      </p>
    </div>
  );
}

export default function TestPage() {
  const today = startOfDay(new Date());

  const [category, setCategory] = useState<string>('All');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [viewMonth, setViewMonth] = useState(today);

  const filteredCars = useMemo(() => {
    if (category === 'All') return cars as Car[];
    return (cars as Car[]).filter((car) => car.category === category);
  }, [category]);

  const hasSelectedDates = startDate !== null && endDate !== null;
  const rentalDays = hasSelectedDates ? rentalDaysInclusive(startDate, endDate) : 0;

  const priceSummary =
    selectedCar && hasSelectedDates
      ? calculateTotal(selectedCar.price_per_day, rentalDays)
      : null;

  const openCarModal = (car: Car) => {
    if (!car.is_available) return;
    setSelectedCar(car);
    setStartDate(null);
    setEndDate(null);
    setViewMonth(today);
  };

  const closeModal = () => setSelectedCar(null);

  const handleRangeClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleRangeChange = (start: Date, end: Date) => {
    setStartDate(start);
    setEndDate(end);
    setViewMonth(start);
  };

  useEffect(() => {
    if (!selectedCar) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCar]);

  return (
    <main className="min-h-screen bg-orange-50">
      <header className="bg-orange-500 text-white shadow-md">
        <div className="mx-auto max-w-6xl px-8 py-5">
          <h1 className="text-3xl font-bold tracking-tight">Luvdrive</h1>
          <p className="mt-1 text-orange-100 text-sm">เช่ารถหรู ง่าย สะดวก รวดเร็ว</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-8 py-8">
        <h2 className="text-xl font-semibold text-orange-900 mb-1">เลือกรถที่ใช่สำหรับคุณ</h2>
        <p className="text-orange-700/70 mb-8">ค้นหาและเลือกรถเช่าที่ต้องการ</p>

        <section className="mb-8 rounded-xl bg-white p-6 shadow-sm border border-orange-100">
          <label htmlFor="category" className="block text-sm font-medium text-orange-900 mb-2">
            ประเภทรถ
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full max-w-xs rounded-lg border border-orange-200 bg-white px-4 py-2.5 text-orange-950 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </section>

        <section>
          <p className="mb-4 text-sm text-orange-700/60">
            พบ {filteredCars.length} คัน — กดเลือกรถเพื่อดูรายละเอียดและคำนวณราคา
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <article
                key={car.id}
                role="button"
                tabIndex={car.is_available ? 0 : -1}
                aria-disabled={!car.is_available}
                onClick={() => openCarModal(car)}
                onKeyDown={(e) => {
                  if (car.is_available && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    openCarModal(car);
                  }
                }}
                className={`overflow-hidden rounded-xl bg-white shadow-sm border transition-all ${
                  car.is_available
                    ? 'border-orange-100 cursor-pointer hover:border-orange-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                    : 'border-orange-100 opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="relative aspect-[16/10] bg-orange-50">
                  <img
                    src={car.image_url}
                    alt={`${car.brand} ${car.model}`}
                    className="h-full w-full object-cover"
                  />
                  {!car.is_available && (
                    <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                      ไม่ว่าง
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-orange-600">
                    {car.category}
                  </span>
                  <h2 className="mt-1 text-lg font-bold text-orange-950">
                    {car.brand} {car.model}
                  </h2>
                  <p className="mt-1 text-sm text-orange-700/60">
                    {car.seats} ที่นั่ง · {car.transmission}
                  </p>

                  <div className="mt-4 border-t border-orange-50 pt-4 flex items-center justify-between">
                    <p className="text-sm text-orange-700/60">ราคาต่อวัน</p>
                    <p className="text-lg font-bold text-orange-600">
                      {formatPrice(car.price_per_day, car.currency)}
                    </p>
                  </div>

                  {car.is_available && (
                    <p className="mt-3 text-center text-sm font-medium text-orange-500">
                      เลือกรถคันนี้ →
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <p className="rounded-xl bg-white p-8 text-center text-orange-700/60 shadow-sm border border-orange-100">
              ไม่พบรถในหมวดหมู่ที่เลือก
            </p>
          )}
        </section>
      </div>

      {selectedCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="car-modal-title"
        >
          <button
            type="button"
            aria-label="ปิด"
            onClick={closeModal}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-orange-600 hover:bg-white"
              aria-label="ปิด modal"
            >
              ✕
            </button>

            <div className="aspect-[16/10] bg-orange-50">
              <img
                src={selectedCar.image_url}
                alt={`${selectedCar.brand} ${selectedCar.model}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-wide text-orange-600">
                {selectedCar.category}
              </span>
              <h2 id="car-modal-title" className="mt-1 text-xl font-bold text-orange-950">
                {selectedCar.brand} {selectedCar.model}
              </h2>
              <p className="mt-1 text-sm text-orange-700/60">
                {selectedCar.seats} ที่นั่ง · {selectedCar.transmission}
              </p>

              <div className="mt-6">
                <p className="mb-2 text-sm font-medium text-orange-900">เลือกวันที่เช่า</p>
                <RentalCalendar
                  startDate={startDate}
                  endDate={endDate}
                  viewMonth={viewMonth}
                  onViewMonthChange={setViewMonth}
                  onRangeChange={handleRangeChange}
                  onRangeClear={handleRangeClear}
                />
                {hasSelectedDates && rentalDays >= 3 && (
                  <p className="mt-2 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                    ส่วนลด 10% สำหรับการเช่า 3 วันขึ้นไป
                  </p>
                )}
              </div>

              <div className="mt-6 rounded-xl bg-orange-50 border border-orange-100 p-4 space-y-3">
                <h3 className="text-sm font-semibold text-orange-900">สรุปการจอง</h3>

                <div className="rounded-lg bg-white border border-orange-100 p-3 space-y-2">
                  {hasSelectedDates ? (
                    <>
                      <div className="flex justify-between gap-4 text-sm">
                        <span className="text-orange-700/60 shrink-0">วันเริ่มเช่า</span>
                        <span className="font-medium text-orange-950 text-right">
                          {formatDateThai(startDate)}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4 text-sm">
                        <span className="text-orange-700/60 shrink-0">วันคืนรถ</span>
                        <span className="font-medium text-orange-950 text-right">
                          {formatDateThai(endDate)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-orange-700/60">จำนวนวันเช่า</span>
                        <span className="font-medium text-orange-950">{rentalDays} วัน</span>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-orange-700/60 text-center py-2">
                      กรุณาเลือกวันที่เช่าจากปฏิทิน
                    </p>
                  )}
                </div>

                {hasSelectedDates && priceSummary && (
                <div className="border-t border-orange-200 pt-3 space-y-3">
                  <h4 className="text-sm font-semibold text-orange-900">สรุปราคา</h4>

                  <div className="flex justify-between text-sm">
                    <span className="text-orange-700/60">ราคาต่อวัน</span>
                    <span className="font-medium text-orange-950">
                      {formatPrice(selectedCar.price_per_day, selectedCar.currency)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-orange-700/60">ราคารวม ({rentalDays} วัน)</span>
                    <span className="font-medium text-orange-950">
                      {formatPrice(priceSummary.subtotal, selectedCar.currency)}
                    </span>
                  </div>

                  {priceSummary.hasDiscount && (
                    <div className="flex justify-between text-sm">
                      <span className="text-orange-600">ส่วนลด 10%</span>
                      <span className="font-medium text-orange-600">
                        -{formatPrice(priceSummary.subtotal * 0.1, selectedCar.currency)}
                      </span>
                    </div>
                  )}

                  <div className="border-t border-orange-200 pt-3 flex items-end justify-between">
                    <span className="text-sm font-semibold text-orange-900">ราคาสุทธิ</span>
                    <div className="text-right">
                      {priceSummary.hasDiscount && (
                        <p className="text-sm text-orange-300 line-through">
                          {formatPrice(priceSummary.subtotal, selectedCar.currency)}
                        </p>
                      )}
                      <p className="text-2xl font-bold text-orange-600">
                        {formatPrice(priceSummary.total, selectedCar.currency)}
                      </p>
                    </div>
                  </div>
                </div>
                )}
              </div>

              <button
                type="button"
                disabled={!hasSelectedDates}
                className="mt-6 w-full rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors disabled:cursor-not-allowed disabled:bg-orange-200"
              >
                ยืนยันการเช่า
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
