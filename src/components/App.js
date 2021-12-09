import { useState } from "react";

import Home from "./Home";
import LogoMini from "./LogoMini";


export default function App() {
  const [screen, setScreen] = useState(null)

  return (
    <>
      {
        screen ?
        (
          <>
            <LogoMini />
            {screen}
          </>
        )
        :
        <Home setScreen={setScreen}/>
      }
    </>
  )
}