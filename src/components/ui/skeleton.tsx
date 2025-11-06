/**
 * File: src/components/ui/skeleton.tsx
 * Purpose: Skeleton loading primitives used as placeholders while content loads.
 *
 * Influenced by:
 *  - React and Tailwind tokens
 *
 * Influences:
 *  - Exports Skeleton used by lists and cards during loading states.
 *
 * Notes: Non-functional header added for documentation only.
 */

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
