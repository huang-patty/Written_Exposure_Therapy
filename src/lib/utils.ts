/**
 * File: src/lib/utils.ts
 * Purpose: Small utility helpers used across the app (className merging helpers).
 * Influenced by: clsx & tailwind-merge; Influences: components that use `cn` for class composition.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
