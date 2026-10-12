"use client";

import { useRef, useState } from "react";
import { Check, Copy, MessageCircle } from "lucide-react";
import { hasWhatsAppNumber, waLink } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const SERVICE_OPTIONS = [
  "Gel extensions",
  "Custom nail art",
  "Bridal set",
  "Refill or removal",
] as const;

const STYLE_OPTIONS = [
  "Elegant / minimal",
  "Bold / statement",
  "Bridal / festive",
  "I need Ananya's suggestion",
] as const;

const SHAPE_OPTIONS = [
  "Not sure yet",
  "Almond",
  "Square",
  "Oval",
  "Coffin",
] as const;

function readableDate(date: string): string {
  if (!date) return "flexible";
  return new Date(date + "T12:00:00").toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Message template — verbatim from mockup SPEC (Section 5.2). */
function buildMessage(
  service: string,
  style: string,
  date: string,
  shape: string,
  notes: string
): string {
  const cleanNotes = notes.trim() || "No extra notes";
  return (
    `Hi Ananya, I would like to enquire about a ${service}.\n` +
    `Style: ${style}\n` +
    `Shape: ${shape}\n` +
    `Preferred date: ${readableDate(date)}\n` +
    `Notes: ${cleanNotes}`
  );
}

export default function EnquiryBuilder() {
  const [service, setService] = useState<string>(SERVICE_OPTIONS[0]);
  const [style, setStyle] = useState<string>(STYLE_OPTIONS[0]);
  const [date, setDate] = useState("");
  const [shape, setShape] = useState<string>(SHAPE_OPTIONS[0]);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const notesRef = useRef<HTMLTextAreaElement>(null);

  const message = () => buildMessage(service, style, date, shape, notes);

  /** 3-tier copy fallback — verbatim status strings from SPEC. Pure client-side. */
  async function handleCopy(e: React.FormEvent) {
    e.preventDefault();
    const text = message();

    // Tier 3: clipboard API absent
    if (
      typeof navigator === "undefined" ||
      !navigator.clipboard ||
      typeof navigator.clipboard.writeText !== "function"
    ) {
      setNotes(text);
      requestAnimationFrame(() => {
        notesRef.current?.focus();
        notesRef.current?.select();
      });
      setStatus("Message prepared — copy it from the notes box.");
      setCopied(false);
      return;
    }

    try {
      // Tier 1: clipboard success
      await navigator.clipboard.writeText(text);
      setStatus("Copied — paste it into WhatsApp or Instagram.");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 4000);
    } catch {
      // Tier 2: clipboard rejected → drop message into notes box
      setNotes(text);
      setStatus("Copy unavailable. Select and copy the generated text below.");
      setCopied(false);
    }
  }

  function handleWhatsApp() {
    if (!hasWhatsAppNumber()) {
      setStatus(
        "WhatsApp number abhi set nahi hua — message copy karke bhej do."
      );
      return;
    }
    window.open(waLink(message()), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="book" aria-labelledby="book-title" className="section-pad">
      <div className="wrap">
        <div className="grid gap-10 rounded-[34px] bg-wine p-7 shadow-[var(--shadow)] tablet:p-10 desktop:grid-cols-[0.72fr_1.28fr] desktop:gap-14 desktop:p-14">
          {/* Copy column */}
          <div className="text-wine-ink">
            <p className="eyebrow !text-wine-ink [&::before]:bg-wine-ink">
              Booking
            </p>
            <h2
              id="book-title"
              className="h2 mt-5 text-[clamp(38px,5vw,58px)]"
            >
              Turn interest into a clear enquiry.
            </h2>
            <p className="mt-5 max-w-[40ch] opacity-85">
              The visitor chooses a service, mood and preferred date. The site
              prepares a message they can copy into WhatsApp or Instagram DM.
            </p>
          </div>

          {/* Form column */}
          <form
            onSubmit={handleCopy}
            className="rounded-[20px] bg-surface p-6 shadow-[var(--shadow)] tablet:p-8"
          >
            <div className="grid gap-5 tablet:grid-cols-2">
              <div>
                <Label htmlFor="service">Service</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service" aria-label="Service">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="style">Style mood</Label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger id="style" aria-label="Style mood">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {STYLE_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date">Preferred date</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="shape">Preferred shape</Label>
                <Select value={shape} onValueChange={setShape}>
                  <SelectTrigger id="shape" aria-label="Preferred shape">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SHAPE_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="tablet:col-span-2">
                <Label htmlFor="notes">Anything Ananya should know?</Label>
                <Textarea
                  id="notes"
                  ref={notesRef}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Occasion, inspiration, allergies — kuch bhi…"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 tablet:flex-row tablet:items-center">
              <Button type="submit" className="btn-full-mobile">
                {copied ? (
                  <Check aria-hidden="true" />
                ) : (
                  <Copy aria-hidden="true" />
                )}
                Copy enquiry message
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleWhatsApp}
                className="btn-full-mobile"
              >
                <MessageCircle aria-hidden="true" />
                Send on WhatsApp
              </Button>
            </div>
            <p
              role="status"
              aria-live="polite"
              className="mt-3 min-h-[22px] text-[13px] text-muted"
            >
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
