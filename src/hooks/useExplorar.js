import { useContext } from "react";
import { SessionUsuario } from "../contexto/sessionUsuario";
import servicioExplorar from "../servicios/servicioExplorar";

const useExplorar = () => {
    
    const {llamarAPIExplorar} = servicioExplorar();

    const {
        token
    } = useContext(SessionUsuario);

    const obtenerExplorar = async() => {
        return llamarAPIExplorar(token.current).then(
            (usuarios)=>{
                return usuarios
            },(error) =>{
                return [];
            }
        );
    }

    return {
        obtenerExplorar
    }

}

export default useExplorar;