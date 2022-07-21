import React, {  useContext } from "react";
import AppContext from "../context/contextapi"
 
function BotaoLink({data}=props){
     
    const { Photos } = useContext(AppContext);
    
    function Categoria(category){    
        Photos.setCategory(category)      
    }
    function makeLink(index,{ folder, total }=elemento){
                
        const chave = "chave_" + index   ;
        
        const clickable = {
            "onClick": Categoria,
            "className":"btn btn-primary my-2"
        }
        
        const notclickable = {
            "onClick": function(){},
            "className":"btn btn-secondary my-2"
        }
        
        const clicavel = total > 0 ? clickable:notclickable 
        
         return ( 
                <span className="me-3" key={chave}>
                    <button onClick={ () => clicavel.onClick(folder) } className={clicavel.className}>
                        { folder } [{total}] 
                    </button>
                </span>
         )
        
   
    }
    if(data){
        return data.map((el,index)=> makeLink(index,el))
    }
 
    return <>Loading....</>
    
}
 
export default BotaoLink;