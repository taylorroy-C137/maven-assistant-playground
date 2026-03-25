export function GradientBackground() {
  return (
    <div className="absolute inset-0 bg-maven-bg overflow-hidden pointer-events-none">
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] opacity-25 blur-2xl"
        style={{
          background:
            "linear-gradient(0deg, #51d4e5 0%, rgba(81, 212, 229, 0) 70%), linear-gradient(90deg, #51d4e5 0%, #66a3ff 100%)",
        }}
      />
    </div>
  );
}
