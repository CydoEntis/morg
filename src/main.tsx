import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import './styles.css'

console.log('Main.tsx loading')

const rootElement = document.getElementById('app')
console.log('Root element:', rootElement)

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
  console.log('React app rendered')
} else {
  console.error('Could not find app element!')
}