import authAxios from "./authAxios";
import baseURL from "./baseUrl";

const servicioPerfil = () => {
    const {urlRaiz} = baseURL();
    const server_url = urlRaiz;
    const {axiosDataJWT} = authAxios();
    const api_base_url = "/api/usuarios";
    
    const miPerfilAPI = async(token) => {
        const callAxios = axiosDataJWT(server_url + api_base_url,token);
        return callAxios.get("/whoami").then(response => {
                  return response.data;
            },(error)=>{
                console.log(error);
                return {}
            });
    }

    return {
        miPerfilAPI
    }

}

export default servicioPerfil;