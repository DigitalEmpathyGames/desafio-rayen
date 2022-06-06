import React from "react";
import estiloInputText from "../estilos/estiloImputText";

const InputText = ({praceholder,tipo, funcion}) => {
    return (
        <div
            style={estiloInputText.contenedorCuadroTexto}
        >
            <input placeholder={praceholder} style = {estiloInputText.texto} type={tipo} onChange={e => funcion(e.target.value)} /> 
        </div>
    )
}

export default InputText;