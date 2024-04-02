import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {MainContext} from "./Utilities/StateContext/StateContext.ts";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MainContext.Provider value={{variable1: "lol", variable2: "lol2"}}>
          <App />
      </MainContext.Provider>
  </React.StrictMode>,
)
