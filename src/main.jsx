import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './slot3/Slot3.jsx'
import './global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
