function Categoria(valor){
    console.log(valor)
}

clickable = {    
    "onClick": Categoria,
    "className":"btn  btn-primary my-2"
}

notclickable = {
    "onClick": function(){},
    "className":"btn  btn-secondary my-2"
}
total = 033;

const clicavel = total > 0 ? clickable:notclickable 

console.log(clicavel)