import { useContext } from "react";
import useSWR from 'swr';
import MyImages from './imagens'
import AppContext from "../context/contextapi"

export default function Categoria() {  

  const {  Photos } = useContext(AppContext);
  const fetcher = (url) => fetch(url).then((res) => res.json()); 
  
  const { data } = useSWR(`/api/category/fotos/${Photos.Category}`, fetcher) ; 

  function gerarImages(data){  
    if(data) return data.map((imgPath,index) => <MyImages src={imgPath} key={"oioi"+index}/> )   
  }

  return gerarImages(data)
        
  
}