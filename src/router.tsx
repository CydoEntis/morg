import { createRouter } from '@tanstack/react-router'
import { queryClient } from './app/QueryProvider'
import { routeTree } from './routeTree.gen'


export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
