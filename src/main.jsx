import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './Context.jsx'

createRoot(document.getElementById('root')).render(

  <Provider value={{batch:'Mern stack',date:Date.now()}}>
       <App />
  </Provider>,
)
