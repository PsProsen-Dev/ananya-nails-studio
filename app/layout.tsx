import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { SITE } from "@/lib/site-config";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.pageTitle,
  description: SITE.metaDescription,
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

/**
 * Applies the `dark` class from the OS preference before first paint
 * (avoids a light→dark flash). Class strategy — no FOUC, no toggle needed.
 */
function themeInitScript() {
  return `(function(){try{var d=document.documentElement;var dark=window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark)d.classList.add('dark');var mq=window.matchMedia('(prefers-color-scheme: dark)');mq.addEventListener('change',function(e){d.classList.toggle('dark',e.matches);});}catch(e){}})();`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
