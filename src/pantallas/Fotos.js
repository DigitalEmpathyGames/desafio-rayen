import React, { useEffect, useState } from "react";
import FotoDetalle from "../componentes/fotoDetalle";
import PostsService from "../servicios/posts";

const Fotos = () => {

    const {
        posts
    } = PostsService();
    const [serverPosts,setServerPosts] = useState([]);
    const [montado,setMontado] = useState(true);
    useEffect(()=>{
        if(montado){
            posts().then(
                (listaPost) =>{
                   setServerPosts(listaPost);
                },
                (error) => {
                   setServerPosts([]);
                }
            );
        }
        return () => setMontado(false);
    },[]);


    return(

            <div
                style={{
                    display:'grid',
                    gridTemplateColumns:'repeat(2, 1fr)',
                    gridTemplateRows:'repeat(0, 5vw)'
                }}
            >
                {
                   serverPosts.map(
                       (item) => {
                           return <FotoDetalle key = {item.id} item = {item}/>
                       }
                   )
                }
            </div>
    );

}

export default Fotos;
