import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-muted">Hero section yahan Phase 6 mein aayega.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}