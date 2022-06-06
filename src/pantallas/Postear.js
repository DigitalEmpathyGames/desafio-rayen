import React, { useState } from "react";
import Boton from "../componentes/boton";
import useNavegador from "../hooks/useNavegador";
import usePosts from "../hooks/usePosts";

const Postear = () => {

    const {postearAhora} = usePosts();
    const {irAPosts} = useNavegador();
    const [archivo, setArchivo] = useState();

    const subirArchivo = (event) => {
        setArchivo(event.target.files[0]);
    }

    return (

        <div>

            <span>
                sube una foto
            </span>

            <input type="file" name="file" onChange={subirArchivo} />

            <Boton
                funcion = {postearAhora}
                texto = {'Postea algo ahora'}
            />
            <Boton
                funcion = {irAPosts}
                texto = {'volver a Posts'}
            />
        </div>

    )
}

export default Postear;