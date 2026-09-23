export function SectionHeading({ title, intro, centered = false }: { title: string; intro?: string; centered?: boolean }) {
  return (
    <div data-reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-600">{intro}</p>}
    </div>
  );
}
