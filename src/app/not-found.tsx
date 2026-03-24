import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-maven-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-maven-text-muted mb-2">404</h1>
        <p className="text-maven-text-secondary mb-6">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-maven-teal text-white text-sm font-medium hover:bg-maven-teal-dark transition-colors"
        >
          Back to Playground
        </Link>
      </div>
    </div>
  );
}
