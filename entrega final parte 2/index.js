let filtroFiat = {
    nome: " filtro oleo",
    ref: " psl55",
    marca: " tecfil",
    aplic:" Aplicação:Uno Mille/way, Palio, Siena"
}
let filtroGm = {
    nome: " filtro oleo",
    ref: " wo130",
    marca: " wega",
    aplic:" Aplicação:Celta, Classic, Prisma, onix"
} 

var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {  
    const value = campo.value;
    
let teste
while(value != "ESC" ){
   switch (value) {
       case "psl55":
            alert(Object.values(filtroFiat));
            break;
        case "wo130":
            alert(Object.values(filtroGm));
            break;
       default:
           alert("produto não encontrado?")
           break;
   }
   
}

});
 
