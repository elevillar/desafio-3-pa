import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PokemonProvider from './context/PokemonContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
       <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonProvider>
  </React.StrictMode>
)
