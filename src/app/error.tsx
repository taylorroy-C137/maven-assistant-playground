"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-maven-bg">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-maven-text mb-2">
          Something went wrong
        </h1>
        <p className="text-maven-text-secondary text-sm mb-6">
          An unexpected error occurred.
        </p>
        <button
          onClick={reset}
          className="px-5 py-2.5 rounded-xl bg-maven-teal text-white text-sm font-medium hover:bg-maven-teal-dark transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
