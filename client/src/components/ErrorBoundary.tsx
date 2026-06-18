import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const ERROR_COPY = {
  en: {
    title: "An unexpected error occurred.",
    reload: "Reload page",
  },
  fr: {
    title: "Une erreur inattendue est survenue.",
    reload: "Recharger la page",
  },
  lb: {
    title: "En onerwaarte Feeler ass geschitt.",
    reload: "Säit nei lueden",
  },
} as const;

function getFallbackCopy() {
  if (typeof window === "undefined") return ERROR_COPY.en;
  const stored = window.localStorage.getItem("letzimpact-language");
  if (stored === "fr" || stored === "lb" || stored === "en") {
    return ERROR_COPY[stored];
  }
  return ERROR_COPY.en;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const copy = getFallbackCopy();

      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-8">
          <div className="flex w-full max-w-2xl flex-col items-center p-8">
            <AlertTriangle
              size={48}
              className="mb-6 flex-shrink-0 text-destructive"
            />

            <h2 className="mb-4 text-xl">{copy.title}</h2>

            <div className="mb-6 w-full overflow-auto rounded bg-muted p-4">
              <pre className="whitespace-break-spaces text-sm text-muted-foreground">
                {this.state.error?.stack}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2",
                "bg-primary text-primary-foreground",
                "cursor-pointer hover:opacity-90"
              )}
            >
              <RotateCcw size={16} />
              {copy.reload}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
