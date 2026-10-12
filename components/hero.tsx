import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="section-pad" aria-labelledby="hero-title">
      <div className="wrap grid items-center gap-12 desktop:grid-cols-[0.95fr_1.05fr] desktop:gap-16">
        {/* Copy column */}
        <div>
          <p className="eyebrow">Nail artist · custom sets</p>
          <h1 id="hero-title" className="h1 mt-5">
            Nails, but make them <em>yours.</em>
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-muted">
            Elegant, playful ya full bridal glam — Ananya creates custom nail
            looks that feel personal, polished and occasion-ready.
          </p>
          <div className="mt-9 flex flex-col gap-3 tablet:flex-row tablet:flex-wrap">
            <Link href="#work" className="btn btn-primary btn-full-mobile">
              Explore styles
              <ArrowRight className="h-[19px] w-[19px]" aria-hidden="true" />
            </Link>
            <Link href="#book" className="btn btn-secondary btn-full-mobile">
              Build an enquiry
            </Link>
          </div>
        </div>

        {/* Visual column */}
        <div className="relative mx-auto w-full max-w-[520px] desktop:max-w-none">
          <div className="relative min-h-[min(132vw,660px)] desktop:min-h-[620px]">
            {/* Main arch photo */}
            <div className="arch-hero absolute left-[8%] top-0 h-[88%] w-[62%] overflow-hidden bg-blush shadow-[var(--shadow)]">
              <Image
                src={IMAGES.heroFrench.src}
                alt={IMAGES.heroFrench.alt}
                fill
                sizes="(max-width: 860px) 62vw, 420px"
                className="object-cover"
                priority
              />
            </div>
            {/* Floating tilted card */}
            <div className="absolute bottom-[2%] right-[4%] w-[46%] rotate-[3deg] overflow-hidden rounded-[20px] border-4 border-surface bg-blush shadow-[var(--shadow)]">
              <div className="relative aspect-square">
                <Image
                  src={IMAGES.heroFloat.src}
                  alt={IMAGES.heroFloat.alt}
                  fill
                  sizes="(max-width: 860px) 40vw, 260px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Seal badge */}
            <div
              aria-hidden="true"
              className="absolute right-[38%] top-[6%] grid h-28 w-28 rotate-[8deg] place-items-center rounded-full bg-wine shadow-[0_14px_30px_var(--seal-shadow)]"
            >
              <span className="text-center text-[12px] font-semibold uppercase leading-tight tracking-[0.06em] text-wine-ink">
                Made for
                <br />
                your mood
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
