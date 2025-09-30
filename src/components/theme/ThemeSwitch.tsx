import { Switch } from '../ui/switch'
import { useThemeStore } from '@/stores/useThemeStore'
import { THEMES } from '@/constants/theme'

export function ThemeSwitch() {
  const { setTheme, isDark } = useThemeStore()

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? THEMES.DARK : THEMES.LIGHT)
  }

  return <Switch checked={isDark()} onCheckedChange={handleToggle} />
}
