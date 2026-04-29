import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectEmbedProps {
  embedUrl?: string;
  fallbackUrl?: string;
  title: string;
}

export function ProjectEmbed({ embedUrl, fallbackUrl, title }: ProjectEmbedProps) {
  if (!embedUrl) return null;

  return (
    <div className="space-y-4 my-8">
      <h3 className="text-lg font-semibold border-b border-border pb-2">Live Application</h3>
      <div className="relative w-full overflow-hidden rounded-md border border-border bg-card min-h-[500px] flex flex-col">
        <div className="bg-secondary px-4 py-2 border-b border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono truncate">{embedUrl}</span>
          {fallbackUrl && (
            <Button variant="ghost" size="sm" asChild className="h-6 text-xs px-2">
              <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1" /> Open
              </a>
            </Button>
          )}
        </div>
        <div className="flex-grow relative">
          <iframe
            src={embedUrl}
            title={`${title} application preview`}
            className="absolute inset-0 w-full h-full border-0"
            allow="fullscreen"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        If the embedded application fails to load due to browser security settings,{" "}
        {fallbackUrl ? (
          <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            open it in a new tab
          </a>
        ) : (
          "please contact us for access"
        )}
        .
      </p>
    </div>
  );
}
