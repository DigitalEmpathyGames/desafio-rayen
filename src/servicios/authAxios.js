import axios from "axios";

const authAxios = () => {

    const axiosJWT = (API_URL,token) =>{
        return axios.create({
            baseURL:API_URL,
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
    } 

    const axiosDataJWT = (API_URL,token) =>{
        return axios.create({
            baseURL:API_URL,
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
    } 

    const axiosJWTImage = (API_URL,token) =>{

        return axios.create({
            baseURL:API_URL,
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    } 

    return {
        axiosJWT,
        axiosJWTImage,
        axiosDataJWT
    }

}

export default authAxios;