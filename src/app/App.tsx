import { AppShell } from './AppShell'
import { QueryProvider } from './providers'

export function App() {
  return (
    <QueryProvider>
      <AppShell>
        <p>Router Goes Here</p>
      </AppShell>
    </QueryProvider>
  )
}