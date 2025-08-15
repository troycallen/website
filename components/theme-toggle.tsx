"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { useContext } from "react"

export function ThemeToggle() {
  try {
    const { theme, toggleTheme } = useTheme()

    const handleClick = () => {
      console.log('Theme toggle clicked, current theme:', theme)
      toggleTheme()
    }

    return (
      <button
        onClick={handleClick}
        className="fixed top-6 right-6 z-50 p-3 rounded-full border-2 transition-colors shadow-lg"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        style={{ 
          backgroundColor: theme === 'light' ? 'white' : '#1f2937',
          borderColor: theme === 'light' ? '#d1d5db' : '#4b5563',
          color: theme === 'light' ? '#1f2937' : '#fbbf24'
        }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>
    )
  } catch (error) {
    // Fallback button when theme context is not available
    return (
      <button
        onClick={() => console.log('Theme context not available yet')}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-200 border-2 border-gray-300 transition-colors shadow-lg"
        aria-label="Theme toggle (loading)"
      >
        <Sun className="w-5 h-5 text-gray-800" />
      </button>
    )
  }
}