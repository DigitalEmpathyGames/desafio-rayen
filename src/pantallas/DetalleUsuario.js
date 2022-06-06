import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UsuarioDetalle from "../componentes/detalleUsuario";
import HeaderBotones from "../componentes/headerBotones";
import useUsuario from "../hooks/useUsuario";

const DetalleUsuario = () => {

    const location = useLocation();

    const {tarerUsuario} = useUsuario();

    const [usuarioDetalle,setUsuarioDetalle] = useState({});
    const [montado,setMontado] = useState(true);
    useEffect(()=>{
        if(montado){
            tarerUsuario(location.state.name).then(
                (respuesta) => {
                    setUsuarioDetalle(respuesta);
                },
                (error) => {
                    setUsuarioDetalle({});
                }
            );
        }
        return () => {
            setMontado(false);
        };
    },[]);

    return(
        <div>
            {/* <HeaderBotones/> */}
            
            
            {Object.keys(usuarioDetalle).length != 0 &&
                <UsuarioDetalle usuario = {usuarioDetalle}/>
            }
            
        </div>
    )
}

export default DetalleUsuario;