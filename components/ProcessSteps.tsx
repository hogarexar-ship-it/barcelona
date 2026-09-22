export function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <ol className={`grid gap-5 sm:grid-cols-2 ${steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-xl2 border border-ink-100 bg-white p-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold text-white">
            {index + 1}
          </span>
          <p className="mt-4 font-display text-lg font-bold text-ink-900">{step.title}</p>
          <p className="mt-2 text-ink-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
