import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OREAGLE — Performance Based Digital Growth Partner",
  description:
    "OREAGLE builds and manages the digital customer acquisition system for ambitious businesses — website, booking, local SEO, lead generation, and call tracking with no traditional upfront fee. We earn from the jobs our system generates.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-amber-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
