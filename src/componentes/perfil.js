import React from "react";
import estiloPostDetalle from "../estilos/estiloPostDetalle";
import baseURL from "../servicios/baseUrl";

const PerfilComp = ({item}) => {
    const {
        urlRaiz
    } = baseURL();

    return(
        <div
            style= {estiloPostDetalle.cajaContenido}
        >
        <div
            style={estiloPostDetalle.contenedor}
        >
            <div
                style={estiloPostDetalle.contenedorInfo}
            >
                <div
                    style={{backgroundColor:'',flex:2,display:'flex',height:'20vw',...estiloPostDetalle.centrador}}
                >
                        <img 
                            style={estiloPostDetalle.foto}
                            src={urlRaiz + item.imagen}
                            alt={item.caption}
                        />

                </div>
                <div 
                    style={{backgroundColor:'',flex:5,display:'flex',margin:10}}
                >
                    <b style={{fontSize:'1.6vw'}}>

                            
                        <strong>
                            {item.nombre}
                        </strong>
                        <br/>
                        <strong>
                            {item.username}
                        </strong>
                            <br/>
                        <strong>
                            {item.bio}
                        </strong>
                        <br/>
                        <strong>
                            {item.email}
                        </strong>
                        <br/>
                    </b>
                </div>

            </div>
        </div>
        </div>
    )

}

export default PerfilComp;