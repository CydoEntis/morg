import { useEffect, useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { useThemeStore } from '@/stores/useThemeStore'
import { THEMES } from '@/constants/theme'

export function CommandMenu() {
  const { isDark, setTheme } = useThemeStore()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 shadow-lg top-65 max-w-lg mx-auto">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => console.log('Go to Home')}>
                Home
              </CommandItem>
              <CommandItem onSelect={() => console.log('Go to Settings')}>
                Settings
              </CommandItem>
            </CommandGroup>

            <CommandGroup heading="Actions">
              <CommandItem
                onSelect={() => {
                  setTheme(isDark() ? THEMES.LIGHT : THEMES.DARK)
                }}
              >
                Toggle dark mode
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
