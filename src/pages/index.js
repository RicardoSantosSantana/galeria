import Categoria from "../components/Categoria";
import Diretorios from "../components/Diretorios"
import React, {  useContext } from "react";
import AppContext from "../context/contextapi"
 
export default function Home() { 
  const { Photos } = useContext(AppContext);

  return ( 

    <main>
    
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Album example</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
          <Diretorios/>
          </p>
        </div>
      </div>
    </section>    
   
    <div className="album px-2 bg-light"> 
         <h1><span className="badge bg-primary"> {Photos.Category}</span></h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
          <Categoria/> 
        </div>
      
    </div>
  
  </main>

  
  ) 
  }