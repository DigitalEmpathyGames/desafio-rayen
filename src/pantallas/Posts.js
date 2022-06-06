import React, { useEffect, useState } from "react";
import PostDetalle from "../componentes/postDetalle";
import PostsService from "../servicios/posts";

const Posts = () => {

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
        <div>

            {/* <HeaderBotones/> */}

            <div>
                {
                   serverPosts.map(
                       (item) => {
                           return <PostDetalle key = {item.id} item = {item}/>
                       }
                   )
                }
            </div>
        </div>
    );

}

export default Posts;
