import axios from "axios";
import { useContext } from "react";
import { SessionUsuario } from "../contexto/sessionUsuario";
import useSessionUsuario from "../hooks/useSessionUsuario";
import authAxios from "./authAxios";
import baseURL from "./baseUrl";
const API_URL = "http://localhost:3000/api/";

const  Usuarios = () => {

    const {
        token,
        usuario
    } = useContext(SessionUsuario);

    const {urlRaiz} = baseURL();
    const server_url = urlRaiz;
    const api_base_url = "/api/usuarios";
    const {axiosJWT} = authAxios();


    const {
        setearToken,
        setearUsuario
    } = useSessionUsuario();

    const ingresar = async (email, password) => {
        return axios
        .post(API_URL + "usuarios/login", {
            email,
            password
        })
        .then(response => {
          if (response.data.token) {
              setearToken(token, response.data.token);
              setearUsuario(usuario, response.data.usuario);
          }
          return response.data;
        },(error)=>{
            throw new Error(error.response.data.message || error.response.data) ;
        });
    }

    const cerrarSesion = () => {
        setearToken(token, '');
        setearUsuario(usuario, {});
    }

    const registrar = async (username, password, email,nombre,bio) => {
        return axios.post(API_URL + "usuarios/signup", {
            username,
            password,
            email,
            nombre,
            bio
          }).then(response => {
            return response.data;
          },(error)=>{
              throw new Error(error.response.data) ;
          });
    }

    const obtenerUsuarioActual = () => {
        return JSON.parse(localStorage.getItem("usuario"));
    }

    const buscarUsuarioAPI = async(token, usuario) => {
        const callAxios = axiosJWT(server_url + api_base_url,token);
        return callAxios.get("/" + usuario).then(response => {
                  return response.data;
            },(error)=>{
                console.log("error al llamar api");
                console.log(error);
                return ({});
            });
    }



    return {
        cerrarSesion,
        ingresar,
        registrar,
        obtenerUsuarioActual,
        buscarUsuarioAPI
    }

}




export default Usuarios;
