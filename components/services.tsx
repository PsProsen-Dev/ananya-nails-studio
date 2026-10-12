import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    title: "Gel extensions",
    desc: "Shape, length and colour selected around your hands and daily routine.",
  },
  {
    n: "02",
    title: "Custom nail art",
    desc: "Minimal lines, chrome details, florals or something completely personal.",
  },
  {
    n: "03",
    title: "Bridal sets",
    desc: "Statement nails coordinated with jewellery, outfit palette and events.",
  },
  {
    n: "04",
    title: "Refill & removal",
    desc: "A clear aftercare route for returning clients and existing extensions.",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-y border-line bg-surface"
    >
      <div className="wrap section-pad">
        <p className="eyebrow">Services</p>
        <h2 id="services-title" className="h2 mt-5 max-w-[16ch]">
          From everyday neat to celebration-ready.
        </h2>
        <p className="mt-5 max-w-[60ch] text-muted">
          A focused menu keeps the website easy to scan — especially for clients
          arriving from Instagram or WhatsApp.
        </p>

        <div className="mt-12">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-2 py-8 tablet:grid-cols-[auto_1fr] tablet:items-baseline tablet:gap-x-10 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <div className="flex items-baseline gap-5">
                <span
                  aria-hidden="true"
                  className="font-display text-lg font-semibold text-rose"
                >
                  {s.n}
                </span>
                <h3 className="font-display text-[clamp(25px,3vw,34px)] font-semibold tracking-[-0.02em]">
                  {s.title}
                </h3>
              </div>
              <div className="pl-0 tablet:pl-[52px]">
                <p className="text-muted">{s.desc}</p>
                {/* Mockup mein pricing nahi thi — "Enquire for pricing" pattern */}
                <Link
                  href="#book"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-wine transition-colors hover:text-rose"
                >
                  Enquire for pricing
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
