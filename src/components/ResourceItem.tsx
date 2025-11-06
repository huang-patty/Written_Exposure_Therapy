import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { ReactNode } from "react";

interface ResourceItemProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  videoEmbed?: string;
  icon?: ReactNode;
}

const ResourceItem = ({ title, description, tags, link, videoEmbed, icon }: ResourceItemProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start gap-3">
          {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-muted-foreground">{description}</p>

        {videoEmbed && (
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <iframe
              src={videoEmbed}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {link && (
          <Button asChild className="mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {videoEmbed ? (
                <>
                  <Play className="h-4 w-4" />
                  Watch Video
                </>
              ) : (
                <>
                  <ExternalLink className="h-4 w-4" />
                  View Resource
                </>
              )}
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceItem;
