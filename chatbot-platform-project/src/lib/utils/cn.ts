import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Conditional classNames combine karta hai aur Tailwind conflicts resolve karta hai */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}