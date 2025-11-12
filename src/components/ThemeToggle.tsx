import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../theme/ThemeProvider";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const { isLight, toggleTheme } = useTheme();
  const knobClasses = isLight
    ? "bg-slate-900 text-white"
    : "bg-white/85 text-slate-900";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="relative inline-flex h-11 w-20 items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-alt-surface)] px-1 shadow-[var(--glass-shadow)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <span className="sr-only">
        Toggle to {isLight ? "dark" : "light"} appearance
      </span>
      <motion.span
        className={cn(
          "absolute left-1 top-1 flex h-9 w-9 items-center justify-center rounded-full shadow-lg shadow-black/20",
          knobClasses
        )}
        animate={{ x: isLight ? 36 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {isLight ? (
          <Sun className="h-4 w-4 text-amber-500" />
        ) : (
          <Moon className="h-4 w-4 text-slate-100" />
        )}
      </motion.span>
      <div className="flex w-full justify-between px-1 text-[10px] font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">
        <span>Dark</span>
        <span>Light</span>
      </div>
    </button>
  );
};

export default ThemeToggle;
