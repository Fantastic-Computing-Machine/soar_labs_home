import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const STORAGE_KEY = "soar-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  return prefersLight ? "light" : "dark";
};

const applyDocumentTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.setProperty("color-scheme", theme);
  document.body?.setAttribute("data-theme", theme);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    applyDocumentTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const listener = (event: MediaQueryListEvent) => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) return;
      setTheme(event.matches ? "light" : "dark");
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isLight: theme === "light",
      toggleTheme: () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light")),
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
