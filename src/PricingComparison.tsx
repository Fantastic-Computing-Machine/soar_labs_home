import { motion } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";

type Plan = {
  key: "free" | "pro" | "enterprise";
  label: string;
  accent: string;
  cta?: string;
  badge?: string;
};

const plans: Plan[] = [
  {
    key: "free",
    label: "Free",
    accent: "from-slate-500/40 to-slate-800/20",
    cta: "Get Started Free",
  },
  {
    key: "pro",
    label: "Pro",
    accent: "from-indigo-500/60 to-violet-600/40",
  },
  {
    key: "enterprise",
    label: "Enterprise",
    accent: "from-emerald-500/50 to-cyan-500/30",
    cta: "Start Pro Trial",
  },
];

type PlanKey = Plan["key"];

type FeatureRow = {
  label: string;
  values: Record<PlanKey, string | boolean>;
};

const features: FeatureRow[] = [
  {
    label: "Document Storage",
    values: { free: "1GB", pro: "20GB", enterprise: "Unlimited" },
  },
  {
    label: "Monthly Queries",
    values: { free: "100", pro: "Unlimited", enterprise: "Unlimited" },
  },
  {
    label: "LLM Providers",
    values: { free: false, pro: true, enterprise: true },
  },
  {
    label: "Custom Models",
    values: { free: false, pro: false, enterprise: true },
  },
  {
    label: "API Access",
    values: { free: false, pro: true, enterprise: true },
  },
  {
    label: "Priority Support",
    values: { free: false, pro: true, enterprise: true },
  },
] as const;

const buttonStyles: Partial<Record<PlanKey, string>> = {
  free: "border border-[color:var(--border-strong)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-indigo)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  enterprise:
    "bg-gradient-to-r from-indigo-500/80 to-violet-600/70 text-white shadow-lg shadow-indigo-500/30 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-emerald)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
};

const PricingComparison = () => {
  const actionablePlans = plans.filter((plan): plan is Plan & { cta: string } =>
    Boolean(plan.cta)
  );

  const isDisabled = (planKey: string) => planKey === "enterprise";

  return (
    <section
      id="pricing"
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 text-[color:var(--text-primary)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300 shadow-lg shadow-emerald-500/10 backdrop-blur"
        >
          <BarChart3 className="h-4 w-4 text-emerald-200" aria-hidden="true" />
          Compare Plans
        </motion.button> */}
        <h2 className="text-3xl font-bold text-[color:var(--text-primary)] md:text-5xl">
          Choose the{" "}
          <span className="text-[color:var(--accent-violet)]">
            perfect plan
          </span>
        </h2>
        <p className="mt-4 text-base text-[color:var(--text-secondary)] md:text-lg">
          Compare features across each plan to find what works best for your AI
          workflows.
        </p>
        <p className="mt-1 text-sm text-[color:var(--text-muted)]">
          * pricing subject to change
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel overflow-hidden rounded-3xl"
      >
        <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] text-left text-sm uppercase tracking-[0.15em] text-[color:var(--text-muted)]">
          <div className="px-6 py-6">Features</div>
          {plans.map((plan) => (
            <div
              key={plan.key}
              className="relative flex flex-col items-center gap-1 px-6 py-6 text-center text-base font-semibold text-[color:var(--text-primary)]"
            >
              <span>{plan.label}</span>
              {plan.badge ? (
                <span className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--glass-alt-surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--text-secondary)]">
                  {plan.badge}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="divide-y divide-[color:var(--glass-divider)] text-base text-[color:var(--text-secondary)]">
          {features.map((feature, rowIndex) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: rowIndex * 0.04, duration: 0.4 }}
              className="grid grid-cols-[1.5fr_repeat(3,1fr)]"
            >
              <div className="border-r border-[color:var(--glass-divider)] px-6 py-4 text-sm font-medium text-[color:var(--text-primary)]">
                {feature.label}
              </div>
              {plans.map((plan) => (
                <div
                  key={`${feature.label}-${plan.key}`}
                  className="flex items-center justify-center border-r border-[color:var(--glass-divider)] px-6 py-4 text-[color:var(--text-primary)] last:border-r-0"
                >
                  {typeof feature.values[plan.key] === "boolean" ? (
                    feature.values[plan.key] ? (
                      <CheckCircle2 className="h-5 w-5 text-[color:var(--accent-emerald)]" />
                    ) : (
                      <XCircle className="h-5 w-5 text-[color:var(--accent-rose)]" />
                    )
                  ) : (
                    <span className="text-sm font-semibold">
                      {feature.values[plan.key]}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-[color:var(--glass-divider)] bg-[color:var(--glass-alt-surface)] p-6 backdrop-blur lg:flex-row">
          {actionablePlans.map((plan) => (
            <motion.button
              key={`cta-${plan.key}`}
              disabled={isDisabled(plan.key)}
              whileHover={!isDisabled(plan.key) ? { y: -2, scale: 1.01 } : {}}
              whileTap={!isDisabled(plan.key) ? { scale: 0.99 } : {}}
              className={`flex-1 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                isDisabled(plan.key)
                  ? "cursor-not-allowed border border-[color:var(--border-soft)] text-[color:var(--text-muted)]"
                  : buttonStyles[plan.key] ?? ""
              }`}
            >
              {plan.cta}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingComparison;
