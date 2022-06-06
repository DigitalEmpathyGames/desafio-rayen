import { useEffect, useState } from "react";
import HeaderBotones from "../componentes/headerBotones";
import PerfilComp from "../componentes/perfil";
import usePerfil from "../hooks/usePerfil";

const Perfil =  () => {

    const {traerPerfil} = usePerfil();
    const [usuario,setUsuario] = useState({});
    useEffect(
        () => {
            traerPerfil().then(
                (usuario) => {
                    setUsuario(usuario);
                },
                (error) => {
                    setUsuario({});
                }
            );
        },
    []);
    return(
        <div>
            {/* <HeaderBotones/> */}
            {Object.keys(usuario).length != 0 &&
                <PerfilComp
                    item = {usuario}
                />
            }
        </div>
    )
}

export default Perfil;