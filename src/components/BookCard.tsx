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
              src="/assets/book-cover.png"
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
                href="https://www.amazon.com/dp/143384437X"
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
