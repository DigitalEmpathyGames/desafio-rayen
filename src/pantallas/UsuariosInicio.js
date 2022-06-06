import React, { useEffect, useState } from "react";
import Usuario from "../componentes/usuario";
import UsuarioInicioDetalle from "../componentes/usuarioInicioDetalle";
import useExplorar from "../hooks/useExplorar";

const UsuarioInicio = () => {


    const {obtenerExplorar} = useExplorar();

    const [explorados,setExplorados] = useState([]);
    const [montado,setMontado] = useState(true);

    useEffect(()=>{
        if(montado){
            obtenerExplorar().then(
                (respuesta) => {
                    setExplorados(respuesta)
                },
                (error) => {
                    setExplorados([]);
                }
            );
        }
        return () => {
            setMontado(false);
        };
    },[]);


    return(
        <div style={{  display: 'flex',
            msFlexDirection:'row',overflowX:'auto'}}>
                {
                   explorados.map(
                       (item) => {
                           return (<UsuarioInicioDetalle key={item.id} item = {item}/>)
                       }
                   )
                }

        </div>
    )

}

export default UsuarioInicio;