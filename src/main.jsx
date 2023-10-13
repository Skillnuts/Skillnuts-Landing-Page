import React from 'react'
import ReactDOM from 'react-dom/client'
import WOW from 'wow.js'
import 'animate.css'

import App from './App.jsx'
import './index.css'

const wow = new WOW({
  mobile: true, // Enable on mobile
});
wow.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
