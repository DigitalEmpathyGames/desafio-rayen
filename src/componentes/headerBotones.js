import React, { useContext, useEffect, useState } from "react";
import { SessionUsuario } from "../contexto/sessionUsuario";
import useHeaderBotones from "../hooks/useHeaderBotones";

const HeaderBotones = () => {
    const [sessionActiva,setSessionActiva] = useState(false);
    const {desplegarMenu} = useHeaderBotones();
    const {
        token
    } = useContext(SessionUsuario);
    useEffect(() => {
        if(token.current){
            if(Object.keys(token.current).length != 0){
                setSessionActiva(true);
            }else{
                setSessionActiva(false);
            }
        }else{
            setSessionActiva(false);
        }
    },[token.current])
    return(
        <div>
                {desplegarMenu(sessionActiva)}
        </div>
    )

}

export default HeaderBotones;
