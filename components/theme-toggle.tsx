"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function ThemeToggle() {
  try {
    const { theme, toggleTheme } = useTheme()
    return (
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full border border-border bg-card text-foreground hover:bg-muted transition-colors"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </button>
    )
  } catch {
    return (
      <button
        className="fixed top-6 right-6 z-50 p-3 rounded-full border border-border bg-card text-foreground"
        aria-label="Theme toggle"
      >
        <Sun className="w-5 h-5" />
      </button>
    )
  }
}
