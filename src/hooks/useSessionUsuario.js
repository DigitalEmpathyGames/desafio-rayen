const useSessionUsuario = () => {

    const setearToken = (token, webToken) => {
        token.current = webToken; 
    }
    
    const setearUsuario = (usuario,webUsuario) => {
        usuario.current = webUsuario;
    }


    return {
        setearToken,
        setearUsuario
    }


}

export default useSessionUsuario;