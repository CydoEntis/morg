import { motion } from 'framer-motion'
import { useState } from 'react'
import { Switch } from '../ui/switch'
import type { Theme } from '@/constants/theme'
import { useTheme } from '@/app/ThemeProvider'
import { THEMES } from '@/constants/theme'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [nextTheme, setNextTheme] = useState<Theme | null>(null)

  const isDark =
    theme === THEMES.DARK ||
    (theme === THEMES.SYSTEM &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  const handleToggle = (checked: boolean) => {
    setNextTheme(checked ? THEMES.DARK : THEMES.LIGHT)
  }

  return (
    <>
      <Switch checked={isDark} onCheckedChange={handleToggle} />

      {nextTheme && (
        <motion.div
          key={nextTheme}
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={`fixed top-0 left-0 w-full h-full z-50 pointer-events-none ${
            nextTheme === THEMES.DARK ? 'bg-background' : 'dark:bg-background'
          }`}
          onAnimationComplete={() => {
            setTheme(nextTheme)
            setNextTheme(null)
          }}
        />
      )}
    </>
  )
}
