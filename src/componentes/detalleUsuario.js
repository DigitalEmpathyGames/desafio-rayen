import React from "react";
import estiloPostDetalle from "../estilos/estiloPostDetalle";
import baseURL from "../servicios/baseUrl";
const UsuarioDetalle = ({usuario}) =>{

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
                    style={{backgroundColor:'',flex:2,display:'flex',height:'20vw',...estiloPostDetalle.centrador}}
                >
                        <img 
                            style={estiloPostDetalle.foto}
                            src={urlRaiz + usuario.imagen}
                        />

                </div>
                <div 
                    style={{backgroundColor:'',flex:5,display:'flex',margin:10}}
                >
                    <b style={{fontSize:'1.6vw'}}>

                        <strong>
                            userName = {usuario.username}
                        </strong>
                        <br/>
                        <strong>
                            bio = {usuario.bio}
                        </strong>
                        <br/>
                        <strong>
                            email = {usuario.email}
                        </strong>
                            <br/>
                        <strong>
                            nombre = {usuario.nombre}
                        </strong>
                        <br/>
                        <strong>
                            seguidores = {usuario.numSeguidores}
                        </strong>
                        <br/>
                        <strong>
                            seguidos = {usuario.numSiguiendo}
                        </strong>
                    </b>
                </div>

            </div>
        </div>
        </div>
    )
}

export default UsuarioDetalle;