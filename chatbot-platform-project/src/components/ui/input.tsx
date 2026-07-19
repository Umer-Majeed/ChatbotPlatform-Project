"use client";

import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/**
 * Floating-label input — label upar tairta hai jab field focus/filled ho.
 * Har form mein isi ko reuse karna, alag se input style nahi likhna.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, id, onFocus, onBlur, onChange, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const floated = focused || hasValue;

    return (
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          placeholder={label}
          className={cn(
            "peer w-full rounded-lg border border-border bg-surface/60 px-4 pt-5 pb-2 text-sm text-foreground placeholder-transparent outline-none backdrop-blur-sm transition-colors focus:border-foreground/50",
            className,
          )}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
            onBlur?.(e);
          }}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            onChange?.(e);
          }}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute left-4 text-muted transition-all duration-200 ease-[var(--ease-signature)]",
            floated ? "top-2 text-[11px]" : "top-1/2 -translate-y-1/2 text-sm",
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);

Input.displayName = "Input";