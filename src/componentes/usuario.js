import React from "react";
import estiloPostDetalle from "../estilos/estiloPostDetalle";
import useNavegador from "../hooks/useNavegador";
import baseURL from "../servicios/baseUrl";

const Usuario = ({item}) => {
    const {
        urlRaiz
    } = baseURL();

    const fechaDesde = (fecha) => {
        let date = new Date(fecha.toString());
        let year = date.getFullYear();
        let mes = date.getMonth() + 1;
        let dia = date.getDate();
        return dia + '-' + mes + '-' + year;
    }

    const {irADetalleUsuario} = useNavegador();


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
                            onClick={()=>{irADetalleUsuario(item.username)}}
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
                        <strong>
                            desde = {fechaDesde(item.fecha_creado)}
                        </strong>
                    </b>
                </div>

            </div>
        </div>
        </div>
    )

}

export default Usuario;