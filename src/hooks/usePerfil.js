import { useContext } from "react";
import { SessionUsuario } from "../contexto/sessionUsuario";
import servicioPerfil from "../servicios/servicioPerfil";

const usePerfil = () => {
    const {miPerfilAPI} = servicioPerfil();

    const {
        token,
        usuario
    } = useContext(SessionUsuario);

    const traerPerfil = async() => {
        return miPerfilAPI(token.current).then(
            (respuesta) => {
                return respuesta;
            },
            () => {
                return {};
            }
        );
    }

    return {
        traerPerfil
    }

}

export default usePerfil;