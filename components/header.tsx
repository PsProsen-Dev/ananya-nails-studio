"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Style finder", href: "#mood" },
] as const;

/** Brand wordmark: "Ananya" + italic rose "Nails". */
export function BrandMark({ className }: { className?: string }) {
  return (
    <Link
      href="#top"
      aria-label="Ananya Nails — back to top"
      className={cn(
        "font-display text-[24px] font-semibold tracking-[-0.02em] text-ink no-underline",
        className
      )}
    >
      {SITE.brandFirst}{" "}
      <span className="brand-em">{SITE.brandSecond}</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="wrap">
        <nav aria-label="Primary" className="flex items-center justify-between py-4">
          <BrandMark />

          {/* Desktop links */}
          <div className="hidden items-center gap-8 desktop:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-muted transition-colors hover:text-rose"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm" variant="outline" className="rounded-full">
              <Link href="#book">Enquire</Link>
            </Button>
          </div>

          {/* Mobile: brand + Enquire CTA + hamburger */}
          <div className="flex items-center gap-3 desktop:hidden">
            <Button asChild size="sm" variant="outline" className="rounded-full">
              <Link href="#book">Enquire</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown panel */}
        {open && (
          <div className="pb-5 desktop:hidden">
            <ul className="flex flex-col gap-1 rounded-[20px] border border-line bg-surface p-3 shadow-[var(--shadow)]">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[12px] px-4 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-blush"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
