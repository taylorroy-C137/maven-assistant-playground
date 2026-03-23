export function MavenOrb({ size = 32 }: { size?: number }) {
  return (
    <div
      className="relative rounded-full overflow-hidden flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-maven-orb-cyan to-maven-orb-cyan/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-maven-orb-blue to-maven-orb-blue/0 opacity-70" />
    </div>
  );
}
