import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { Reveal } from "./Reveal";

export type Step = { title: string; description: string; icon?: IconName };

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className={`grid gap-5 sm:grid-cols-2 ${steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {steps.map((step, index) => (
        <li key={step.title}>
          <Reveal delay={index * 120} className="h-full">
            <div className="group relative h-full rounded-xl2 border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                  <Icon name={step.icon ?? "check"} className="h-7 w-7" />
                </span>
                <span className="font-display text-4xl font-extrabold text-ink-100">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-5 font-display text-lg font-bold text-ink-900">{step.title}</p>
              <p className="mt-2 text-ink-600">{step.description}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
