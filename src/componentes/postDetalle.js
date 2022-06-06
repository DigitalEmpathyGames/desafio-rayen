import React from "react";
import estiloPostDetalle from "../estilos/estiloPostDetalle";
import baseURL from "../servicios/baseUrl";

const PostDetalle = ({item}) => {
    const {
        urlRaiz
    } = baseURL();
    return (
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
                    style={{backgroundColor:'',flex:2,display:'flex',...estiloPostDetalle.centrador}}
                >
                        <img 
                            style={estiloPostDetalle.foto}
                            src={urlRaiz + item.url}
                            alt={item.caption}
                        />

                </div>
                <div 
                    style={{backgroundColor:'',flex:5,display:'flex',margin:10}}
                >
                    <b style={{fontSize:'1.6vw'}}>
                        <strong>
                            {item.usuario.username}
                        </strong>
                            <br/>
                            <br/>
                        <strong>
                            {item.caption}
                        </strong>
                        <br/> <br/>
                            <br/>
                        <br/> <br/>

                        {/* <a href ={proyecto.enlace} style={{textDecoration:'none'}}>
                            <strong className="fuenteNombre">
                                {espa ? 'Descargar':'Download'}
                            </strong> 
                        </a>
                        <br/><br/>
                        <a href ={proyecto.github} style={{textDecoration:'none'}}>
                            <strong className="fuenteNombre">
                                git hub
                            </strong> 
                        </a> */}
                    </b>
                </div>
            </div>
        </div>
    </div>

    )
}

export default PostDetalle;