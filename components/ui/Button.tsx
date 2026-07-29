import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-gradient-primary text-white shadow-lg shadow-ocean-medium/30 hover:shadow-xl hover:shadow-ocean-medium/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 dark:text-slate-950 dark:shadow-ocean-medium/40",
  secondary:
    "btn-gradient-secondary text-white shadow-md shadow-ocean-light/30 hover:shadow-lg hover:shadow-ocean-light/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 dark:text-slate-950",
  outline:
    "border border-ocean-medium/60 bg-transparent text-ocean-deep hover:bg-ocean-light/10 hover:border-ocean-deep hover:shadow-md hover:shadow-ocean-medium/20 active:bg-ocean-light/20 transition-all dark:border-ocean-light/50 dark:text-ocean-light dark:hover:bg-ocean-light/10 dark:hover:border-ocean-light",
  ghost:
    "bg-transparent text-ocean-deep hover:bg-ocean-light/10 active:bg-ocean-light/20 transition-all dark:text-ocean-light dark:hover:bg-ocean-light/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const Spinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 0 1 8-8v3a5 5 0 0 0-5 5H4z"
    />
  </svg>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium",
          "transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {loading && <Spinner />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
