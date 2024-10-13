// this are the node modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// this is the app component
import App from './App.jsx';

// this is the css file
import './index.css'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
