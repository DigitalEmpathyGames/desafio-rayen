import React, { useCallback, useState } from "react";
import Usuarios from "../servicios/usuarios";
import {useNavigate} from 'react-router-dom';
const useRegistrarse = () => {
    const [nombre,setNombre] = useState('');
    const [password,setPassword] = useState('');
    const [correo,setCorreo] = useState('');
    const [usuario,setUsuario] = useState('');
    const [bio,setBio] = useState('');
    const [mensaje,setMensaje] = useState('');
    const {registrar} = Usuarios();
    const navigate = useNavigate();
    const irALogin = useCallback(() => navigate('/', {replace: true}), [navigate]);
    const registrarse = async () => {
        setMensaje('');
        registrar(usuario,password,correo,nombre,bio).then(
            (respuesta) =>{
                setMensaje("Usuario registrado, ve a logearte");
            },
            (error)=>{
                setMensaje(error.message);
            }
        );
    }

    return {
        setCorreo,
        setPassword,
        registrarse,
        mensaje,
        setUsuario,
        setNombre,
        setBio,
        irALogin
    }

}

export default useRegistrarse;