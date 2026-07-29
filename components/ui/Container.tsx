import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Centered max-width wrapper with consistent responsive padding.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Vertical rhythm. Defaults to `lg`. */
  spacing?: "sm" | "md" | "lg";
  /** Optional muted background for visual separation. */
  muted?: boolean;
  containerClassName?: string;
  id?: string;
}

const spacingClasses: Record<NonNullable<SectionWrapperProps["spacing"]>, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
};

/**
 * Page section wrapper. Handles vertical spacing + max-width via Container.
 */
export function SectionWrapper({
  className,
  containerClassName,
  spacing = "lg",
  muted = false,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        spacingClasses[spacing],
        muted && "bg-muted",
        className,
      )}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
