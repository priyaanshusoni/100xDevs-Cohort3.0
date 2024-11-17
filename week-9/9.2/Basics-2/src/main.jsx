import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListsAndKeys from './ListsAndKeys.jsx'
import ErrorBoundry from './ErrorBoundry.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundry/>
  </StrictMode>,
)
