import React, { createContext, useRef } from 'react';

export const SessionUsuario = createContext();

export const UsuarioContext = ({children}) => {
    const token = useRef({}).current;
    const usuario = useRef({}).current;

    return(
        <SessionUsuario.Provider
            value={{
                token,
                usuario
            }}
        >
            {children}
        </SessionUsuario.Provider>
    )

}

