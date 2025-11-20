import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AudiobookCardProps {
  title: string;
  author: string;
  description: string;
  duration: string;
  coverImage: string;
  genre?: string;
}

const AudiobookCard = ({ title, author, description, duration, coverImage, genre }: AudiobookCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={coverImage}
          alt={`Cover von ${title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-lg leading-tight line-clamp-2">{title}</CardTitle>
          {genre && (
            <Badge variant="secondary" className="shrink-0 text-xs">
              {genre}
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm font-medium text-foreground/70">
          {author}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{description}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{duration}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudiobookCard;
