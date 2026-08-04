import cars from '../data/car.json'

type Car = (typeof cars)[number]

const priceFormatter = new Intl.NumberFormat('th-TH', {
  style: 'currency',
  currency: 'THB',
  maximumFractionDigits: 0,
})

function CarCard({ car }: { car: Car }) {
  // รถว่าง สามารถจองได้
  const isAvailable = car.is_available === true

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-surface shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden bg-soft">
        <img
          src={car.image_url}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${
            isAvailable
              ? ''
              : 'grayscale-[35%] opacity-75'
          }`}
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />

        <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/25 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {car.category}
        </span>

        {!isAvailable && (
          <span className="absolute right-5 top-5 rounded-full bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg">
            ถูกจองแล้ว
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <header>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-champagne">
            {car.brand}
          </p>

          <h2 className="mt-2 font-display text-[2rem] font-medium leading-none tracking-[-0.025em] text-ink sm:text-[2.15rem]">
            {car.model}
          </h2>
        </header>

        <dl className="mt-7 grid grid-cols-2 divide-x divide-line border-y border-line py-5">
          <div className="pr-5">
            <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
              จำนวนที่นั่ง
            </dt>

            <dd className="mt-2 text-sm font-semibold text-ink">
              {car.seats} ที่นั่ง
            </dd>
          </div>

          <div className="pl-5">
            <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
              ระบบเกียร์
            </dt>

            <dd className="mt-2 text-sm font-semibold text-ink">
              {car.transmission}
            </dd>
          </div>
        </dl>

        <div className="mt-auto pt-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                ราคาต่อวัน
              </p>

              <p className="mt-2 font-display text-[1.85rem] font-medium leading-none tracking-tight text-ink">
                {priceFormatter.format(car.price_per_day)}
              </p>
            </div>

            <p className="pb-1 text-xs text-muted">
              / วัน
            </p>
          </div>

          <button
            type="button"
            disabled={!isAvailable}
            className={`mt-7 min-h-12 w-full rounded-full px-6 text-[11px] font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-none focus-visible:ring-4 ${
              isAvailable
                ? 'bg-ink text-white hover:bg-champagne-dark focus-visible:ring-champagne/25'
                : 'cursor-not-allowed border border-line bg-soft text-muted'
            }`}
          >
            {isAvailable
              ? 'จองรถคันนี้'
              : 'ถูกจองแล้ว'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default function TestPage() {
  const availableCars = cars.filter(
    (car) => car.is_available,
  ).length

  return (
    <main className="min-h-screen">
      <header className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <p className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
              MOVAGO
            </p>

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
              Luxury Car Rental
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12">
        <div className="grid items-end gap-8 border-b border-line pb-12 lg:grid-cols-[1fr_auto] lg:pb-14">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne">
              Curated Luxury Fleet
            </p>

            <h1 className="mt-5 font-display text-5xl font-medium leading-[0.95] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
              การเดินทาง
              <span className="block italic text-ink/65">
                ที่เหนือระดับ
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm font-light leading-7 text-muted sm:text-base">
              คอลเลกชันรถยนต์ระดับพรีเมียม
              ที่คัดสรรเพื่อมอบประสบการณ์การเดินทาง
              ที่สง่างาม สะดวกสบาย และแตกต่าง
            </p>
          </div>

          <div className="flex gap-8 lg:pb-1">
            <div>
              <p className="font-display text-3xl text-ink">
                {cars.length}
              </p>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                รถทั้งหมด
              </p>
            </div>

            <div className="border-l border-line pl-8">
              <p className="font-display text-3xl text-ink">
                {availableCars}
              </p>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                พร้อมให้บริการ
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 mt-12 flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne">
              Our Collection
            </p>

            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-ink">
              Luxury Fleet
            </h2>
          </div>

          <p className="hidden text-xs text-muted sm:block">
            เลือกรถที่เหมาะกับการเดินทางของคุณ
          </p>
        </div>

        <section
          aria-label="รายการรถเช่าหรู"
          className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:gap-9"
        >
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </section>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 Movago Luxury Fleet</p>
          <p>Premium journeys, thoughtfully curated.</p>
        </div>
      </footer>
    </main>
  )
}