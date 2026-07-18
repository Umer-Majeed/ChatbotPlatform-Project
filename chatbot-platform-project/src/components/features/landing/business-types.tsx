import {
  Scale,
  Stethoscope,
  UtensilsCrossed,
  Building2,
  Dumbbell,
  Scissors,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  Car,
} from "lucide-react";

const VERTICALS = [
  { label: "Law Firm", icon: Scale },
  { label: "Hospital", icon: Stethoscope },
  { label: "Restaurant", icon: UtensilsCrossed },
  { label: "Real Estate", icon: Building2 },
  { label: "Gym", icon: Dumbbell },
  { label: "Salon", icon: Scissors },
  { label: "E-commerce", icon: ShoppingBag },
  { label: "University", icon: GraduationCap },
  { label: "Agency", icon: Briefcase },
  { label: "Car Dealer", icon: Car },
];

export function BusinessTypes() {
  return (
    <section id="personas" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-lg">
          <h2 className="font-display text-4xl italic text-foreground">
            Built for any front desk.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The same engine, reshaped for whatever business installs it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-5">
          {VERTICALS.map((v) => (
            <div
              key={v.label}
              className="flex flex-col items-start gap-3 bg-surface px-5 py-6 transition-colors hover:bg-background"
            >
              <v.icon size={18} strokeWidth={1.75} className="text-muted" />
              <span className="text-sm font-medium text-foreground">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}