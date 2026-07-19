import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { AuthSessionProvider } from "@/providers/session-provider";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repixm — The AI assistant that becomes your business",
  description:
    "Add your website URL and get a fully-trained AI assistant that speaks like your business.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AuthSessionProvider>
  <div className="grain-overlay" />
  <CustomCursor />
  <SmoothScrollProvider>{children}</SmoothScrollProvider>
</AuthSessionProvider>
        
       
      </body>
    </html>
  );
}