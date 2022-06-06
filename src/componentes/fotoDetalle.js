import React from "react";
import estiloPostDetalle from "../estilos/estiloPostDetalle";
import baseURL from "../servicios/baseUrl";

const FotoDetalle = ({item}) => {
    const {
        urlRaiz
    } = baseURL();
    return (
        <div >
            <img 
                style={
                    {
                        width:'100%',
                        height:'100%',
                        objectFit:'cover'
                    }
                }
                src={urlRaiz + item.url}
                alt={item.caption}
            />

        </div>

    )
}

export default FotoDetalle;