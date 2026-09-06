export function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-xl2 border border-ink-100 bg-white p-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta-500 text-sm font-bold text-white">
            {index + 1}
          </span>
          <p className="mt-3 font-semibold text-ink-900">{step.title}</p>
          <p className="mt-1 text-sm text-ink-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
