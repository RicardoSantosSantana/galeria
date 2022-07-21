import { useContext, useEffect } from "react";
import AppContext from "../context/contextapi" 
import Diretorios from "../components/Diretorios" 
import Categoria from "../components/Categoria";
import Box from "../components/Box";
 
export default function Home() { 
  const {  Photos } = useContext(AppContext);

  return ( 

    <main>
    
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Album de Exemplo 0.0.1</h1>
          <p className="lead text-muted">Verifique se as imagens de seu site estão nas categorias corretas, caso não esteja informe via e-mail ou whatsapp qual categoria deveria estar e também informe se deseja incluir ou retirar alguma imagem.</p>
          <p className="lead text-muted">Essa galeria é apenas para o desenvolvedor saber quais fotos representam qual serviço.</p>
          <p className="alert alert-success">Essa galeria é apenas para o desenvolvedor saber quais fotos representam qual serviço.</p>
          </div>
      </div>
      <Diretorios/>
    </section>    
   
    <div className="album px-2 bg-light"> 
         <Box/> 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
          <Categoria/> 
        </div>
      
    </div>  
  </main>
  ) 
 
  }