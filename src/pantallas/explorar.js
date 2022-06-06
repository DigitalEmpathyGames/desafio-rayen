import React, { useEffect, useState } from "react";
import Usuario from "../componentes/usuario";
import useExplorar from "../hooks/useExplorar";

const Explorar = () => {


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
        <div >
            Clock en la imagen
                {
                   explorados.map(
                       (item) => {
                           return (<Usuario key={item.id} item = {item}/>)
                       }
                   )
                }

        </div>
    )

}

export default Explorar;