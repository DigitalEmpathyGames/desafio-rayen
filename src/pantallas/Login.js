import React from "react";
import Boton from "../componentes/boton";
import HeaderBotones from "../componentes/headerBotones";
import InputText from "../componentes/inputText";
import estiloLogin from "../estilos/estiloLogin";
import useLogin from "../hooks/useLogin";
import useNavegador from "../hooks/useNavegador";
const Login = () => {

    const {
        setCorreo,
        setPassword,
        mensaje,
        login
    } = useLogin();

    const {irARegistrarse} = useNavegador();

    return(
        <div>
            {/* <HeaderBotones/> */}

            <div
                style={{...estiloLogin.centrador,...estiloLogin.fullScreen}}
            >


                <div
                    style={estiloLogin.contenedorElementos}
                >

                    <InputText
                        praceholder = {"ejemplo@ejemplo.com"}
                        tipo = {"text"}
                        funcion = {setCorreo}
                    />
                    <InputText
                        praceholder = {"contraseña"}
                        tipo = {"password"}
                        funcion = {setPassword}
                    />

                    <Boton
                        funcion = {login}
                        texto = {'Login'}
                    />
                    <Boton
                        funcion = {irARegistrarse}
                        texto = {'Registrate'}
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

export default Login;