import { useState } from "react";
import Usuarios from "../servicios/usuarios";
import useNavegador from "./useNavegador";

const useLogin = () => {
    const [correo,setCorreo] = useState('');
    const [password,setPassword] = useState('');
    const [mensaje,setMensaje] = useState('');
    const {ingresar} = Usuarios();

    const {irAInicio} = useNavegador();

    const login = async () => {
        setMensaje('');
        ingresar(correo,password).then(
            (respuesta) =>{
                irAInicio();
            },
            (error)=>{
                setMensaje(error.message);
            }
        );
    }

    return {
        setCorreo,
        setPassword,
        mensaje,
        login
    }

}

export default useLogin;
