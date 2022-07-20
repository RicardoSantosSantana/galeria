import { useState } from "react";

function MaisUM(props){
 
    const [valor, setvalor] = useState(100)

    function incrementarBotao(){
        const Balor = valor +1
        setvalor(Balor)
    }
    
    return <div>
            <h1>{valor}</h1>
            <h2>Meu nome é: {props.nome}</h2>
            <button onClick={()=>incrementarBotao()}> Incrementar Valor</button>
        </div>
}

export default MaisUM 