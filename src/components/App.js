import React from "react"


import Home from "./Home"

import Main from "./Main"


export default function App () {
  return(
    <div className="App-Container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <a href="#" id="home" ></a>
        <Home />

     
      <Main />

    </div>
  )
}