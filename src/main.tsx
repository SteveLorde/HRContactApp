import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {MainContext} from "./Utilities/StateContext/StateContext.ts";
import {Footer} from "./Components/Footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MainContext.Provider value={{variable1: "lol", variable2: "lol2"}}>
          <App />
          <Footer />
      </MainContext.Provider>
  </React.StrictMode>
)
