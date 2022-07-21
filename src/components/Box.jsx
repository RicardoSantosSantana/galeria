import { useContext, useEffect } from "react";
import useSWR from 'swr';
import MyImages from './imagens'
import AppContext from "../context/contextapi"

import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';


export default function Box() {  
    const [toggler, setToggler] = useState(false);

  const {  Photos } = useContext(AppContext);
  const fetcher = (url) => fetch(url).then((res) => res.json()); 
  const { data } = useSWR(`/api/category/fotos/${Photos.Category}`, fetcher) ; 
   
    if(data) {
        return (   
       <>
           <button className="btn btn-success" onClick={ () => setToggler(!toggler) }>
             Ver imagens maiores de:  {Photos.Category}
           </button>
           <FsLightbox toggler={ toggler } sources={ data } />
           </> 
        )
       
       }
  
    
}
   