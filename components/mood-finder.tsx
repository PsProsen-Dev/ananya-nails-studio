"use client";

import { useState } from "react";
import Image from "next/image";
import { MOODS, type MoodId } from "@/lib/images";
import { cn } from "@/lib/utils";

export default function MoodFinder() {
  const [activeId, setActiveId] = useState<MoodId>("elegant");
  const active = MOODS.find((m) => m.id === activeId) ?? MOODS[0];

  return (
    <section id="mood" aria-labelledby="mood-title" className="section-pad">
      <div className="wrap">
        <p className="eyebrow">Interactive idea</p>
        <h2
          id="mood-title"
          className="h2 mt-5 max-w-[14ch] text-[clamp(40px,5vw,62px)]"
        >
          Find your nail mood.
        </h2>
        <p className="mt-5 max-w-[60ch] text-muted">
          Client ko technical terms yaad rakhne ki zarurat nahi. Bas mood
          choose kare — website usse starting direction de degi.
        </p>

        <div className="mt-10 grid gap-10 desktop:grid-cols-[1fr_0.72fr] desktop:gap-[clamp(28px,6vw,80px)]">
          {/* Result copy */}
          <div className="order-2 desktop:order-1">
            <div
              role="tablist"
              aria-label="Nail moods"
              className="flex flex-wrap gap-3"
            >
              {MOODS.map((m) => {
                const selected = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    role="tab"
                    id={`tab-${m.id}`}
                    aria-selected={selected}
                    aria-controls="mood-panel"
                    onClick={() => setActiveId(m.id)}
                    className={cn(
                      "rounded-full border border-line px-6 py-3 text-[15px] font-semibold transition-[background-color,color,border-color] duration-200",
                      selected
                        ? "border-wine bg-wine text-wine-ink"
                        : "bg-surface text-ink hover:border-rose hover:text-rose"
                    )}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>

            <div
              id="mood-panel"
              role="tabpanel"
              aria-live="polite"
              aria-labelledby={`tab-${active.id}`}
              className="mt-8"
            >
              <h3 className="font-display text-[28px] font-semibold tracking-[-0.02em]">
                {active.name}
              </h3>
              <p className="mt-3 max-w-[44ch] text-muted">{active.text}</p>
            </div>
          </div>

          {/* Arch image card — mobile par pehle */}
          <div className="order-1 desktop:order-2">
            <div className="arch-mood relative min-h-[112vw] overflow-hidden bg-sage shadow-[var(--shadow)] tablet:min-h-[500px] desktop:min-h-[430px]">
              <Image
                key={active.image.src}
                src={active.image.src}
                alt={active.image.alt}
                fill
                sizes="(max-width: 860px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
