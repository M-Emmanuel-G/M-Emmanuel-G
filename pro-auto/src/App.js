import Router from "./router";
import { ClientContext } from "./context/context"
import { useState } from "react";

function App() {
  const [renderClient, setRenderClient] = useState([])
  
  return (
    <ClientContext.Provider value={{renderClient, setRenderClient}}>
      <Router/>
    </ClientContext.Provider>
  );
}

export default App;
