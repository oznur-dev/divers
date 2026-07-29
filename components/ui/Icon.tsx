import * as React from "react";
import type { IconName } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Legacy Icon component - replaced by Lucide React icons.
 * Kept for backward compatibility.
 */
const PATHS: Record<IconName, React.ReactNode> = {
  Compass: <circle cx="12" cy="12" r="10" />,
  Droplets: <circle cx="12" cy="12" r="10" />,
  Anchor: <circle cx="12" cy="12" r="10" />,
  Mountain: <circle cx="12" cy="12" r="10" />,
  Fish: <circle cx="12" cy="12" r="10" />,
  GraduationCap: <circle cx="12" cy="12" r="10" />,
  Award: <circle cx="12" cy="12" r="10" />,
  Sparkles: <circle cx="12" cy="12" r="10" />,
  Globe: <circle cx="12" cy="12" r="10" />,
  Shield: <circle cx="12" cy="12" r="10" />,
  TrendingUp: <circle cx="12" cy="12" r="10" />,
};

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  /** Pixel size (width and height). Defaults to 24. */
  size?: number;
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
