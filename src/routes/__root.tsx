import { Outlet, createRootRoute } from '@tanstack/react-router'
import { AppShell } from '@/app/AppShell'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div>
      <AppShell>
        <Outlet />
      </AppShell>
    </div>
  )
}
