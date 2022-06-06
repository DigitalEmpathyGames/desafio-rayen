import React from "react";
import { Route, Routes } from "react-router-dom";
import DetalleUsuario from "../pantallas/DetalleUsuario";
import Explorar from "../pantallas/explorar";
import Inicio from "../pantallas/Inicio";
import Login from "../pantallas/Login";
import Perfil from "../pantallas/Perfil";
import Postear from "../pantallas/Postear";
import Posts from "../pantallas/Posts";
import Registrarse from "../pantallas/Registrarse";

const Navegador = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Registrarse" element={<Registrarse />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Postear" element={<Postear />} />
            <Route path="/Explorar" element={<Explorar />} />
            <Route path="/DetalleUsuario" element={<DetalleUsuario />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/inicio" element={<Inicio />} />
        </Routes>
    )
}

export default Navegador;