import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { Reveal } from "./Reveal";

export type Step = { title: string; description: string; icon?: IconName };

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {steps.map((step, index) => (
        <li key={step.title}>
          <Reveal delay={index * 80}>
            <div className="flex items-center gap-3 border-t border-ink-200 pt-5">
              <span className="font-display text-sm font-bold text-accent-600">{index + 1}</span>
              {step.icon && <Icon name={step.icon} className="h-6 w-6 text-ink-700" />}
            </div>
            <p className="mt-4 font-display text-lg font-bold text-ink-900">{step.title}</p>
            <p className="mt-2 text-ink-600">{step.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
