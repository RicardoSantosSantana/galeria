function Itens({data}=props){

    if(data){
        const options = data.map(el=><option>{el}</option>)
        return <select className="form-select form-select-lg " >{options}</select>
    }
    return <>Loading....</>
    
}

export default Itens;