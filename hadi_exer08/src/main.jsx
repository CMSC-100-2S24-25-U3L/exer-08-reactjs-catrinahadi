import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( // root DOM node and render the app
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
