import { motion } from 'framer-motion'
import { Switch } from '../ui/switch'
import { useThemeToggle } from '@/hooks/useThemeToggle'

export function ThemeSwitch() {
  const { isDark, nextTheme, handleToggle, applyNextTheme } = useThemeToggle()

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
          onAnimationComplete={applyNextTheme}
        />
      )}
    </>
  )
}
