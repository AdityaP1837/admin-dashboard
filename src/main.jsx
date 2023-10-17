import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
)
