export function GradientBackground() {
  return (
    <div className="absolute inset-0 bg-maven-bg overflow-hidden pointer-events-none">
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "linear-gradient(180deg, #51d4e5 0%, rgba(81, 212, 229, 0) 100%)",
        }}
      />
      <div
        className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "linear-gradient(0deg, #66a3ff 0%, rgba(102, 163, 255, 0) 100%)",
        }}
      />
    </div>
  );
}
