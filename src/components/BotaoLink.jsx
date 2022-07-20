import React, {  useContext } from "react";
import AppContext from "../context/contextapi"
 
function BotaoLink({data}=props){
    
    const { Photos } = useContext(AppContext);
    
    function Categoria(category){
    
        Photos.setCategory(category)      
    }
    function makeButton(index,{ folder, total }=elemento){
                
        const chave = "chave_" + index   ;
        
        if(total>0){
         return  <span className="me-3 " key={chave}> <button onClick={ () => Categoria(folder) } className="btn btn-primary my-2"> { folder } [{total}] </button></span>
        }
         
         return  <span className="me-3 " key={chave}> <button  className="btn  btn-secondary my-2">  { folder } [{total}]  </button></span>
    }
    if(data){
        return data.map((el,index)=> makeButton(index,el))
    }
 
    return <>Loading....</>
    
}
 
export default BotaoLink;