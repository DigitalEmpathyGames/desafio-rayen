import React from "react";
import Explorar from "./explorar";
import Fotos from "./Fotos";
import UsuarioInicio from "./UsuariosInicio";

const Inicio = () => {

    return (
        <div>
            Descubrir Usuarios (click en la imagen)
            <UsuarioInicio/>
            Explorar
            <Fotos/>
        </div>
    )

}

export default Inicio;