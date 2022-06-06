import React from "react";
import Boton from "../componentes/boton";
import HeaderBotones from "../componentes/headerBotones";
import InputText from "../componentes/inputText";
import estiloRegistrarse from "../estilos/estiloRegistrarse";
import useRegistrarse from "../hooks/useRegistrarse";
const Registrarse = () => {

    const {
        setCorreo,
        setPassword,
        registrarse,
        mensaje,
        setUsuario,
        setNombre,
        setBio,
        irALogin
    } = useRegistrarse();

    return(
        <div>
            {/* <HeaderBotones/> */}
            <div
                style={{...estiloRegistrarse.centrador,...estiloRegistrarse.fullScreen}}
            >

                <span
                >
                    Registrarse
                </span>

                <div
                    style={estiloRegistrarse.contenedorElementos}
                >

                    <InputText
                        praceholder = {"Nombre de usuario"}
                        tipo = {"text"}
                        funcion = {setUsuario}
                    />
                    <InputText
                        praceholder = {"contraseña"}
                        tipo = {"text"}
                        funcion = {setPassword}
                    />
                    <InputText
                        praceholder = {"ejemplo@ejemplo.com"}
                        tipo = {"text"}
                        funcion = {setCorreo}
                    />
                    <InputText
                        praceholder = {"su nombre"}
                        tipo = {"text"}
                        funcion = {setNombre}
                    />
                    <InputText
                        praceholder = {"Tu Bio"}
                        tipo = {"text"}
                        funcion = {setBio}
                    />
                    <Boton
                        funcion = {registrarse}
                        texto = {'registrar'}
                    />
                    <Boton
                        funcion = {irALogin}
                        texto = {'Volver al login'}
                    />

                </div>
                <span
                >
                    {mensaje}
                </span>

            </div>
        </div>
    )
}

export default Registrarse;