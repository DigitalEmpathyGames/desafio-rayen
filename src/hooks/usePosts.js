import { useContext } from "react";
import { SessionUsuario } from "../contexto/sessionUsuario";
import procesaPostService from "../servicios/procesaPost";

const usePosts = () =>{

    const {upload} = procesaPostService()

    const {
        token
    } = useContext(SessionUsuario);


    const subirArchivo = () => {
        console.log("subo el archivo");
    }

    const postearAhora = async() => {
        upload(token.current);
    }
    return {
        subirArchivo,
        postearAhora
    }
}
export default usePosts;