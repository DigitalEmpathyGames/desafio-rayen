import React from "react";
import estiloBoton from "../estilos/estiloBoton";

const Boton = ({funcion,texto}) => {
    return (
        <div
        style={estiloBoton.contenedor}
        >
            <div
                style={estiloBoton.boton}
                onClick={()=>{funcion()}}
            >
                <label>
                    {texto}
                </label>
            </div>
        </div>
    )
}

export default Boton;