/**
 * File: src/components/ui/aspect-ratio.tsx
 * Purpose: Small helper component to enforce aspect ratios on media/content.
 *
 * Influenced by:
 *  - React
 *  - Utility CSS/tokens from `src/index.css`
 *
 * Influences:
 *  - Provides an AspectRatio wrapper used by media and card components.
 *
 * Notes: Non-functional header added for documentation only.
 */

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
