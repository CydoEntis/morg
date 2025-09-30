import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme } from '@/constants/theme'
import { THEMES } from '@/constants/theme'

interface ThemeStore {
  theme: Theme
  setTheme: (t: Theme) => void
  isDark: () => boolean
}

function applyThemeToDOM(theme: Theme) {
  if (typeof window === 'undefined') return

  const root = window.document.documentElement
  root.classList.remove('light', 'dark')

  if (theme === THEMES.SYSTEM) {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    root.classList.add(systemTheme)
  } else {
    root.classList.add(theme)
  }
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: THEMES.LIGHT,

      setTheme: (t) => {
        set({ theme: t })
        applyThemeToDOM(t)
      },

      isDark: () => {
        const { theme } = get()

        if (theme === THEMES.DARK) return true
        if (theme === THEMES.SYSTEM && typeof window !== 'undefined') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyThemeToDOM(state.theme)
        }
      },
    },
  ),
)

if (typeof window !== 'undefined') {
  const store = useThemeStore.getState()
  applyThemeToDOM(store.theme)
}

if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    const { theme } = useThemeStore.getState()
    if (theme === THEMES.SYSTEM) {
      applyThemeToDOM(THEMES.SYSTEM)
    }
  })
}
