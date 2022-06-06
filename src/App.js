import React from "react";
import Navegador from "./navegador/navegador";
import { UsuarioContext } from "./contexto/sessionUsuario";
import HeaderBotones from "./componentes/headerBotones";
function App() {
  return (
    <div>
      <AppContext>
        <HeaderBotones/>
        <Navegador/>
      </AppContext>
    </div>
  );
}

const AppContext = ({children}) =>{
  return(
    <UsuarioContext>
      {children}
    </UsuarioContext>
  );
}


export default App;
