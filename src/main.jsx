import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CoinContext, { CoinProvider } from './providers/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CoinProvider>
   <App />
   </CoinProvider>
  </StrictMode>
)
