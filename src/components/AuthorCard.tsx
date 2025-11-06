import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface AuthorCardProps {
  name: string;
  credentials: string;
  bio: string;
  imageUrl?: string;
}

const AuthorCard = ({ name, credentials, bio, imageUrl }: AuthorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto sm:mx-0">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-16 h-16 text-primary/40" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-sm text-muted-foreground font-medium">{credentials}</p>
            </div>
            <div className="prose prose-sm max-w-none">
              <p className="text-foreground/90 whitespace-pre-line leading-relaxed">
                {bio}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
