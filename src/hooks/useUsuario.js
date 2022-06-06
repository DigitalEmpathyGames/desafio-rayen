import React, { useContext } from "react";
import { SessionUsuario } from "../contexto/sessionUsuario";
import Usuarios from "../servicios/usuarios";

const useUsuario = () => {

    const {buscarUsuarioAPI} = Usuarios();

    const {
        token
    } = useContext(SessionUsuario);

    const tarerUsuario = async (usuario) =>{
        return buscarUsuarioAPI(token.current,usuario).then(
            (respuesta) => {
                return respuesta;
            },
            (error)=>{
                console.log("al enviar token error");
                return({})
            }
        );
    }

    return{
        tarerUsuario
    }

}

export default useUsuario;

