"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type Theme } from "./ThemeProvider";

const options: { value: Theme; icon: React.ElementType; label: string }[] = [
  { value: "light",  icon: Sun,     label: "Light"  },
  { value: "dark",   icon: Moon,    label: "Dark"   },
  { value: "system", icon: Monitor, label: "System" },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex items-center gap-0.5 rounded-[8px] bg-notion-card p-1 shadow-notion-deep"
      style={{ border: "1px solid var(--notion-border)" }}
    >
      {options.map(({ value, icon: Icon, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            title={label}
            className={`flex items-center gap-1.5 rounded-[6px] px-3 py-1.5 text-[12px] font-semibold tracking-[0.125px] transition-colors ${
              active
                ? "bg-notion-blue text-white"
                : "text-notion-gray500 hover:bg-notion-ghost hover:text-notion-ink"
            }`}
          >
            <Icon size={12} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
