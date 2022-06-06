import React from "react";
import estiloPostDetalle from "../estilos/estiloPostDetalle";
import useNavegador from "../hooks/useNavegador";
import baseURL from "../servicios/baseUrl";

const UsuarioInicioDetalle = ({item}) => {
    const {
        urlRaiz
    } = baseURL();


    const {irADetalleUsuario} = useNavegador();


    return(
        <div
            style= {{        display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:'1250px',
            paddingTop:'10px',
            marginBottom:'5px'}}
        >
        <div
            style={{
                height: '100%',
                width: '100%',
                backgroundColor:'#E3C4E5',
                display: 'flex',
                flexDirection:'column',
                borderWidth:'5px',
                borderStyle:'solid',
                borderBlockColor:'#E5879F',
                borderRadius:'10px'
            }}
        >
            <div
                style={{
                    backgroundColor:'',
                    flex:5,
                    display:'flex',
                    flexDirection:'column'
                }}
            >
                <div
                    style={{
                        backgroundColor:'',
                        flex:2,
                        display:'flex',
                        height:'20vw',
                        ...estiloPostDetalle.centrador
                    }}
                >
                        <img 
                            style={{

                                marginTop:20,
                                marginBottom:20,
                                height: '15vw',
                                width: '15vw',
                                borderWidth:'5px',
                                borderStyle:'solid',
                                borderColor:'#E5879F',
                                borderRadius:'100%'
                            }}
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
                    </b>
                </div>

            </div>
        </div>
        </div>
    )

}

export default UsuarioInicioDetalle;