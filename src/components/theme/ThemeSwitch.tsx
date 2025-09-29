import { motion } from 'framer-motion'
import { useState } from 'react'
import { Switch } from '../ui/switch'
import { useTheme } from '@/app/ThemeProvider'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [nextTheme, setNextTheme] = useState<'light' | 'dark' | null>(null)

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  const handleToggle = (checked: boolean) => {
    setNextTheme(checked ? 'dark' : 'light')
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
            nextTheme === 'dark' ? 'bg-background' : 'dark:bg-background'
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
