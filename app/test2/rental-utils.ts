export const CATEGORIES = ['All', 'Luxury EV', 'Luxury Sedan', 'Sports'] as const;
export const MAX_RENTAL_DAYS = 30;

export function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return startOfDay(result);
}

export function rentalDaysInclusive(start: Date, end: Date) {
  const diff = startOfDay(end).getTime() - startOfDay(start).getTime();
  return Math.floor(diff / 86400000) + 1;
}

export function calculateTotal(pricePerDay: number, days: number) {
  const subtotal = pricePerDay * days;
  const hasDiscount = days >= 3;
  const total = hasDiscount ? subtotal * 0.9 : subtotal;
  return { subtotal, total, hasDiscount };
}

export function filterCarsByCategory<T extends { category: string }>(
  cars: T[],
  category: string,
) {
  if (category === 'All') return cars;
  return cars.filter((car) => car.category === category);
}

export function clampRentalEnd(start: Date, end: Date, maxDays = MAX_RENTAL_DAYS) {
  const days = rentalDaysInclusive(start, end);
  if (days <= maxDays) return end;
  return addDays(start, maxDays - 1);
}
