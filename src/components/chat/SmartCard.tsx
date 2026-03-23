import type { SmartCard as SmartCardType } from "@/lib/scenario-types";
import { Calendar, ArrowRight, AlertTriangle, Check } from "lucide-react";

interface SmartCardProps {
  card: SmartCardType;
}

export function SmartCard({ card }: SmartCardProps) {
  const icon =
    card.kind === "appointment" ? (
      <Calendar className="w-5 h-5 text-maven-teal" />
    ) : card.kind === "escalation" ? (
      <AlertTriangle className="w-5 h-5 text-maven-error" />
    ) : (
      <Check className="w-5 h-5 text-maven-teal" />
    );

  return (
    <div className="ml-8 rounded-xl border border-maven-border bg-white/80 backdrop-blur-sm overflow-hidden max-w-[85%]">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">{icon}</div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-maven-text">{card.title}</h4>
            {card.subtitle && (
              <p className="text-sm text-maven-text-secondary mt-0.5">
                {card.subtitle}
              </p>
            )}
            {card.time && (
              <p className="text-sm text-maven-text-tertiary mt-1">{card.time}</p>
            )}
          </div>
        </div>

        {card.bio && (
          <p className="text-sm text-maven-text-secondary mt-3 leading-relaxed">
            {card.bio}
          </p>
        )}
      </div>

      {card.actions && card.actions.length > 0 && (
        <div className="border-t border-maven-border px-4 py-3 flex gap-2">
          {card.actions.map((action, i) => (
            <button
              key={i}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                action.variant === "primary"
                  ? "bg-maven-teal text-white"
                  : action.variant === "destructive"
                    ? "text-maven-error border border-maven-error/20"
                    : "text-maven-teal border border-maven-teal/20"
              }`}
            >
              {action.label}
              {action.variant === "primary" && <ArrowRight className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}

      {card.visited && (
        <div className="px-4 py-2 bg-maven-highlight border-t border-maven-border">
          <span className="text-xs text-maven-teal-visited font-medium">
            Visited
          </span>
        </div>
      )}
    </div>
  );
}
