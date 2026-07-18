import {
  Scale,
  Stethoscope,
  UtensilsCrossed,
  Building2,
  Dumbbell,
} from "lucide-react";
import type { BusinessPersona } from "@/types/persona";

export const BUSINESS_PERSONAS: BusinessPersona[] = [
  {
    id: "law-firm",
    label: "Law Firm",
    icon: Scale,
    greeting: "Hallo & Bloom Legal — how can I help with your case today?",
    reply: "I can schedule a free consultation or answer questions about our practice areas.",
  },
  {
    id: "hospital",
    label: "Hospital",
    icon: Stethoscope,
    greeting: "Welcome to Riverside Health — I'm here to help.",
    reply: "I can book an appointment, find a specialist, or share visiting hours.",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    icon: UtensilsCrossed,
    greeting: "Hey there! Welcome to Osteria Nove",
    reply: "Want me to check tonight's availability or walk you through the menu?",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    icon: Building2,
    greeting: "Hi, I'm the assistant for Marlowe Properties.",
    reply: "Tell me your budget and neighborhood, I'll pull matching listings.",
  },
  {
    id: "gym",
    label: "Gym",
    icon: Dumbbell,
    greeting: "Yo! Iron Yard Fitness here",
    reply: "Want a free trial pass or info on our class schedule?",
  },
];