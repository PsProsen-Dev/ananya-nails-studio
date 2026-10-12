import { Instagram } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { BrandMark } from "@/components/header";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="wrap flex flex-col gap-5 py-10 tablet:flex-row tablet:items-center tablet:justify-between">
        <div className="flex flex-col gap-2">
          <BrandMark />
          <p className="text-sm text-muted">
            Website direction for Ananya · nail artist portfolio
          </p>
        </div>
        <div className="flex flex-col gap-2 tablet:items-end">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-wine transition-colors hover:text-rose"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            {SITE.instagramHandle}
            <span className="font-normal text-muted">(sample)</span>
          </a>
          <p className="text-xs text-muted">Sample website concept</p>
        </div>
      </div>
    </footer>
  );
}
