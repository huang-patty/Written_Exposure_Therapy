/**
 * File: src/components/ui/collapsible.tsx
 * Purpose: Collapsible content primitive (alternative to accordion) for simple show/hide sections.
 *
 * Influenced by:
 *  - React and Radix/UI primitives
 *  - Tailwind tokens
 *
 * Influences:
 *  - Exported Collapsible used by pages/components needing toggleable content.
 *
 * Notes: Non-functional header added for documentation only.
 */

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
