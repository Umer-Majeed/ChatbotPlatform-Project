import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/features/landing/hero";
import { HowItWorks } from "@/components/features/landing/how-it-works";
import { BusinessTypes } from "@/components/features/landing/business-types";
import { CTASection } from "@/components/features/landing/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <BusinessTypes />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}