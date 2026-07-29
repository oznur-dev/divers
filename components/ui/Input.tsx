import * as React from "react";
import { cn } from "@/lib/utils";

type InputVariant = "default" | "error" | "success";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  variant?: InputVariant;
}

const variantClasses: Record<InputVariant, string> = {
  default:
    "border-border focus:border-ocean-medium focus:ring-ocean-medium/30",
  error:
    "border-red-500 focus:border-red-500 focus:ring-red-500/30",
  success:
    "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/30",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      variant = "default",
      id,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId();
    const inputId = id ?? reactId;
    const describedById = errorMessage
      ? `${inputId}-error`
      : helperText
        ? `${inputId}-helper`
        : undefined;
    const resolvedVariant: InputVariant = errorMessage ? "error" : variant;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={resolvedVariant === "error" || undefined}
          aria-describedby={describedById}
          className={cn(
            "block w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground",
            "placeholder:text-muted-foreground",
            "transition-all duration-200",
            "focus:outline-none focus:ring-4",
            "hover:border-ocean-medium/40",
            "disabled:cursor-not-allowed disabled:opacity-60",
            variantClasses[resolvedVariant],
            className,
          )}
          {...props}
        />
        {errorMessage ? (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-xs text-red-500"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={`${inputId}-helper`}
            className="mt-1.5 text-xs text-muted-foreground"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

/* ---------- Textarea (same API family) ---------- */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  variant?: InputVariant;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      variant = "default",
      id,
      rows = 5,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId();
    const inputId = id ?? reactId;
    const describedById = errorMessage
      ? `${inputId}-error`
      : helperText
        ? `${inputId}-helper`
        : undefined;
    const resolvedVariant: InputVariant = errorMessage ? "error" : variant;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          aria-invalid={resolvedVariant === "error" || undefined}
          aria-describedby={describedById}
          className={cn(
            "block w-full resize-y rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground",
            "placeholder:text-muted-foreground",
            "transition-all duration-200",
            "focus:outline-none focus:ring-4",
            "hover:border-ocean-medium/40",
            "disabled:cursor-not-allowed disabled:opacity-60",
            variantClasses[resolvedVariant],
            className,
          )}
          {...props}
        />
        {errorMessage ? (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-xs text-red-500"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={`${inputId}-helper`}
            className="mt-1.5 text-xs text-muted-foreground"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
