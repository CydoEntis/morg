import type { ReactNode } from 'react'
import { AppSidebar } from '@/components/app-sidebar'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { CommandMenu } from '@/components/command-palette/CommandMenu'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '19rem',
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
      </SidebarInset>
      <CommandMenu />
    </SidebarProvider>
  )
}
