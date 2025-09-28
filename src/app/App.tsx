import { RouterProvider } from '@tanstack/react-router'
import { QueryProvider } from './QueryProvider'
import { ThemeProvider } from './ThemeProvider'
import { router } from '@/router'

export function App() {
  return (
    <ThemeProvider defaultTheme='dark'>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ThemeProvider>
  )
}
