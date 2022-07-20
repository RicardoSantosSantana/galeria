function Itens({data}=props){

    if(data){
        const options = data.map(el=><option key={el}>{el}</option>)
        return <select key="itens" className="form-select form-select-lg " >{options}</select>
    }
    return <>Loading....</>
    
}

export default Itens;