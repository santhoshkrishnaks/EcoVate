import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './Components/Footer.jsx'
import './index.css'
import About from './Components/About.jsx'
import Feed from './Components/EcoConnect/Feed.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Feed/>
  </React.StrictMode>,
)
