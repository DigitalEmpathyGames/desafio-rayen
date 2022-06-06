import { useContext } from "react";
import Boton from "../componentes/boton";
import { SessionUsuario } from "../contexto/sessionUsuario";
import useNavegador from "./useNavegador";
import useSessionUsuario from "./useSessionUsuario";

const useHeaderBotones = () => {
    const {
        token,
        usuario
    } = useContext(SessionUsuario);

    const {
        setearToken,
        setearUsuario
    } = useSessionUsuario();

    const {irAPosts,irAExplorar,irALogin,irAPerfil,irAInicio} = useNavegador();

    const cerrarSession = () => {
        setearToken(token,{});
        setearUsuario(usuario,{});
        irAPosts();
    }

    const desplegarMenu = (sessionActiva) => {
        if(sessionActiva){
            return(
                <div
                    style={{
                        flexDirection:'row',
                        display:'flex',
                        height:'13vh'
                    }}
                >
                    <Boton
                        funcion = {irAInicio}
                        texto = {'Ir a inicio'}
                    />
                    <Boton
                        funcion = {irAPosts}
                        texto = {'Explorar Posts'}
                    />
                    <Boton
                        funcion = {irAExplorar}
                        texto = {'Explorar Usuarios'}
                    />
                    <Boton
                        funcion = {irAPerfil}
                        texto = {'Mi perfil'}
                    />
                    <Boton
                        funcion = {cerrarSession}
                        texto = {'Cerrar Session'}
                    />
                </div>
            )
        }else{
            return (
                <div
                    style={{
                        flexDirection:'row',
                        display:'flex',
                        height:'13vh',
                    }}
                >
                    <Boton
                        funcion = {irALogin}
                        texto = {'logear'}
                    />
                    <Boton
                        funcion = {irAPosts}
                        texto = {'Explorar Posts'}
                    />
                </div>
            )
        }
    }


    return {
        desplegarMenu
    }

}

export default useHeaderBotones;