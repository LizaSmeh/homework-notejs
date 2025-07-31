import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AppProvaider } from './context/AppProvaider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppProvaider>
    <App />
    </AppProvaider>
    </BrowserRouter>
  </StrictMode>,
)
