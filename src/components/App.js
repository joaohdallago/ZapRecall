import { useState } from "react";

import Home from "./Home";


export default function App() {
  const [screen, setScreen] = useState(null)

  return (
    <>
      {
        screen ?
        screen 
        :
        <Home setScreen={setScreen}/>
      }
    </>
  )
}