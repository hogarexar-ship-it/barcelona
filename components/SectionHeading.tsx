export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-600">{intro}</p>}
    </div>
  );
}
