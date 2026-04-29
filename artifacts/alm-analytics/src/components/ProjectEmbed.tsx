import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectEmbedProps {
  embedUrl?: string;
  fallbackUrl?: string;
  title: string;
}

const DEFAULT_ALLOWED_EMBED_HOSTS = [
  "localhost",
  "127.0.0.1",
  "streamlit.app",
  "share.streamlit.io",
  "shinyapps.io",
  "observablehq.com",
  "public.tableau.com",
  "app.powerbi.com",
];

function parseCsvEnv(value: string | undefined): string[] {
  return value
    ? value
        .split(",")
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean)
    : [];
}

const allowedEmbedHosts =
  parseCsvEnv(import.meta.env.VITE_ALLOWED_EMBED_HOSTS).length > 0
    ? parseCsvEnv(import.meta.env.VITE_ALLOWED_EMBED_HOSTS)
    : DEFAULT_ALLOWED_EMBED_HOSTS;

function isAllowedEmbedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

    if (parsed.protocol !== "https:" && !isLocalhost) {
      return false;
    }

    return allowedEmbedHosts.some(
      (allowedHost) =>
        hostname === allowedHost || hostname.endsWith(`.${allowedHost}`),
    );
  } catch {
    return false;
  }
}

export function ProjectEmbed({ embedUrl, fallbackUrl, title }: ProjectEmbedProps) {
  if (!embedUrl) return null;

  const canEmbed = isAllowedEmbedUrl(embedUrl);

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
          {canEmbed ? (
            <iframe
              src={embedUrl}
              title={`${title} application preview`}
              className="absolute inset-0 w-full h-full border-0"
              allow="fullscreen"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-forms allow-popups-to-escape-sandbox"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm text-muted-foreground">
              This application is available through the external link, but it is not on the approved embed list.
            </div>
          )}
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
