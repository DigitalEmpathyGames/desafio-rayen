
import authAxios from "./authAxios";
import baseURL from "./baseUrl";

const  procesaPostService = () => {
    const {urlRaiz} = baseURL();
    const server_url = urlRaiz;
    const api_base_url = "/api/posts";
    const {axiosJWTImage} = authAxios();




    const upload = async (token) => {

        const callAxios = axiosJWTImage(server_url + api_base_url,token);
        return callAxios.post("/upload").then(response => {
            return response.data;
      },(error)=>{
          console.log(error);
      });
    }



    return {
        upload
    }

}

export default procesaPostService;