import { AlertTriangle, ArrowRight } from "lucide-react";

interface EscalationCardProps {
  title?: string;
  message?: string;
}

export function EscalationCard({
  title = "Connecting you with your care team",
  message = "This conversation is being transferred to a member of your care team who can help with your specific needs.",
}: EscalationCardProps) {
  return (
    <div className="ml-8 rounded-xl border border-maven-border bg-white/80 backdrop-blur-sm overflow-hidden max-w-[85%]">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-maven-highlight flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-4 h-4 text-maven-teal" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-maven-text">{title}</h4>
            <p className="text-sm text-maven-text-secondary mt-1 leading-relaxed">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-maven-border px-4 py-3">
        <button className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium bg-maven-teal text-white">
          View care team <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
