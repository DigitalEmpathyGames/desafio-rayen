import axios from "axios";
import cabeceraAutenticacion from "./cabeceraAutenticacion";
const API_URL = "http://localhost:3000/api/posts";

const  PostsService = () => {

    const {cabecera} = cabeceraAutenticacion()

    const posts = async () => {
        return axios
        .get(API_URL + "/")
        .then(response => {
          return response.data;
        },(error)=>{
            console.log(error);
        });
    }

    const explore = async () => {
        return axios
        .post(API_URL + "/explore")
        .then(response => {
          return response.data;
        },(error)=>{
            throw new Error(error.response.data) ;
        });
    }




    const feed = async (fecha) => {

        const authAxios = axios.create({
            baseURL:API_URL,
            headers:{
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("usuario"))}`,
            },
        });
        return authAxios.get("/feed").then(response => {
                return response.data;
          },(error)=>{
              console.log(error);
          });
    }


    return {
        feed,
        posts
    }

}

export default PostsService;