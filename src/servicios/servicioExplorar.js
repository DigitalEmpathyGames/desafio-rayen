import authAxios from "./authAxios";
import baseURL from "./baseUrl";

const servicioExplorar = () => {
    const {urlRaiz} = baseURL();
    const server_url = urlRaiz;
    const api_base_url = "/api/usuarios";
    const {axiosJWT} = authAxios();

    const llamarAPIExplorar = async(token) => {
            const callAxios = axiosJWT(server_url + api_base_url,token);
            return callAxios.get("/explore").then(response => {
                      return response.data;
                },(error)=>{
                    console.log(error);
                    return [];
                });
    }

    return {
        llamarAPIExplorar
    }
}

export default servicioExplorar;