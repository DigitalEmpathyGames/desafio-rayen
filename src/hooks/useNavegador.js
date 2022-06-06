import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useNavegador = () => {
    const navigate = useNavigate();

    const irAPostear = () => {
        navigate('/Postear', {replace: true}, [navigate]);
    }

    const irAPosts = useCallback(() => {
        navigate('/Posts', {replace: true}, [navigate]);
    });

    const irARegistrarse = useCallback(() => {
        navigate('/Registrarse', {replace: true}, [navigate]);
    });
    const irAExplorar = useCallback(() => {
        navigate('/Explorar', {replace: true}, [navigate]);
    });

    const irADetalleUsuario = (usuario) => {
        navigate('/DetalleUsuario', { state: { id: 1, name: usuario } },{replace: true}, [navigate]);
    }

    const irALogin = () => {
        navigate('/', {replace: true}, [navigate]);
    }
    const irAPerfil = () => {
        navigate('/Perfil', {replace: true}, [navigate]);
    }
    const irAInicio = () => {
        navigate('/Inicio', {replace: true}, [navigate]);
    }
    return {
        irAPostear,
        irAPosts,
        irARegistrarse,
        irAExplorar,
        irADetalleUsuario,
        irALogin,
        irAPerfil,
        irAInicio
    }

}

export default useNavegador;