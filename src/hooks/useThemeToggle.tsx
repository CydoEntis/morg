import { useState } from 'react'
import type { Theme } from '@/constants/theme'
import { useTheme } from '@/app/ThemeProvider'
import { THEMES } from '@/constants/theme'

export function useThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [nextTheme, setNextTheme] = useState<Theme | null>(null)

  const isDark =
    theme === THEMES.DARK ||
    (theme === THEMES.SYSTEM &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  const handleToggle = (checked: boolean) => {
    setNextTheme(checked ? THEMES.DARK : THEMES.LIGHT)
  }

  const applyNextTheme = () => {
    if (nextTheme) {
      setTheme(nextTheme)
      setNextTheme(null)
    }
  }

  return { theme, isDark, nextTheme, handleToggle, applyNextTheme }
}
