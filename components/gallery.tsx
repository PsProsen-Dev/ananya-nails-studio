import Image from "next/image";
import { IMAGES } from "@/lib/images";

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute bottom-4 left-4 rounded-full bg-[var(--work-label-bg)] px-4 py-2 text-[13px] font-semibold text-white">
      {children}
    </span>
  );
}

export default function Gallery() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-pad">
      <div className="wrap">
        <p className="eyebrow">Portfolio</p>
        <h2 id="work-title" className="h2 mt-5 max-w-[18ch]">
          A portfolio that lets the details speak.
        </h2>
        <p className="mt-5 max-w-[60ch] text-muted">
          Large, close-cropped images make technique and finish the centre of
          attention.
        </p>
        {/* Mockup note — verbatim from SPEC, SAMPLE marker */}
        <p className="mt-4 max-w-[70ch] rounded-[12px] border border-line bg-blush/40 px-4 py-3 text-sm text-muted">
          <strong className="font-semibold text-ink">Mockup note:</strong> launch
          se pehle in reference photos ko Ananya ke original work se replace
          karna best rahega.
        </p>

        <div className="mt-12 grid gap-6 desktop:grid-cols-[1.12fr_0.88fr]">
          {/* Tall tile */}
          <figure className="gallery-img tile-a relative m-0 h-[116vw] max-h-[720px] overflow-hidden bg-blush shadow-[var(--shadow)] tablet:h-[580px] desktop:h-auto desktop:min-h-[640px]">
            <Image
              src={IMAGES.statementDetail.src}
              alt={IMAGES.statementDetail.alt}
              fill
              sizes="(max-width: 860px) 100vw, 620px"
              className="object-cover"
            />
            <figcaption className="contents">
              <Caption>Statement detail</Caption>
            </figcaption>
          </figure>

          {/* Right column: two short tiles */}
          <div className="grid gap-6">
            <figure className="gallery-img tile-b relative m-0 h-[88vw] overflow-hidden bg-blush shadow-[var(--shadow)] tablet:h-[280px] desktop:h-auto desktop:min-h-[308px]">
              <Image
                src={IMAGES.bridalJewel.src}
                alt={IMAGES.bridalJewel.alt}
                fill
                sizes="(max-width: 860px) 100vw, 480px"
                className="object-cover"
              />
              <figcaption className="contents">
                <Caption>Bridal glow</Caption>
              </figcaption>
            </figure>
            <figure className="gallery-img tile-a relative m-0 h-[88vw] overflow-hidden bg-blush shadow-[var(--shadow)] tablet:h-[280px] desktop:h-auto desktop:min-h-[308px]">
              <Image
                src={IMAGES.heroFloat.src}
                alt={IMAGES.heroFloat.alt}
                fill
                sizes="(max-width: 860px) 100vw, 480px"
                className="object-cover"
              />
              <figcaption className="contents">
                <Caption>Soft minimal</Caption>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
