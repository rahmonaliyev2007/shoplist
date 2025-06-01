import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryProvider } from './query/QueryProvide.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </QueryProvider>
  </StrictMode>,
)
