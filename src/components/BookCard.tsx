/**
 * File: src/components/BookCard.tsx
 * Purpose: Presentational card that displays the WET treatment manual cover, blurb, and purchase link.
 *
 * Influenced by:
 *  - `@/components/ui/card`, `@/components/ui/button` for layout and CTA
 *  - `lucide-react` for the external link icon
 *  - Local asset `/assets/book_cover.jpeg` (referenced in the component)
 *
 * Influences:
 *  - Exported default `BookCard` used wherever the manual/purchase CTA is required.
 *
 * Notes:
 *  - Non-functional header added for documentation. Existing inline docblock retained below.
 */

/**
 * BookCard Component
 * 
 * Displays information about the Written Exposure Therapy treatment manual
 * including cover image, description, and purchase link.
 * 
 * Usage:
 * ```tsx
 * <BookCard />
 * ```
 * 
 * Assets Required:
 * - /assets/book_cover.jpeg: Book cover image
 * 
 * Configuration:
 * - Update the purchase link in the <Button> component
 * - Image dimensions are optimized for 300px width
 */

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BookCard = () => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="bg-secondary/20 rounded-lg p-4 flex justify-center">
            <img
              src="/assets/book_cover.jpeg"
              alt="Written Exposure Therapy for PTSD - book cover"
              className="w-full max-w-[300px] h-auto rounded-md shadow-md"
            />
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Treatment Manual</h3>
            <p className="text-sm text-muted-foreground">
              Written by the treatment's developers, and available in both original paperback and e-book formats.
            </p>
            
            <Button 
              asChild
              className="w-full"
              size="lg"
            >
              <a
                href="https://www.amazon.com/Written-Exposure-Therapy-PTSD-Professionals/dp/1433844370"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Buy on Amazon
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              Available in Japanese, Korean, Chinese, and Turkish translations
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
