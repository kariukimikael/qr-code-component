import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min'
// Custom CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
