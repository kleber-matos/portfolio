import { ModeContext } from "./Context/ModeContext";
import { useState } from "react";
import Router from "./Router/Router";

export default function App() {
  const [mode, setMode] = useState();

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className={`${mode ? "dark" : ""}`}>
        <Router />
      </div>
    </ModeContext.Provider>
  );
}
