import { useContext, useEffect } from "react";
import BotaoLink from "./BotaoLink";
import AppContext from "../context/contextapi"; 

function Diretorios(){
  
    const { Photos } = useContext(AppContext);
  
    const url="/api/category/diretorios/"
      
    useEffect( () => { getData() })
   
        async function getData(){   
                 
           return await fetch(url)
             .then(res=>res.json())             
             .then(data=>Photos.setListDirPhotos(data))
        }

    return <BotaoLink data={Photos.ListDirPhotos} ></BotaoLink>

}

export default Diretorios;