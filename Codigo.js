const numeros = [];
for(let i = 0; i<10; i++){
    numeros.push(Math.floor(Math.random()*50));
}

const numeroTexto = document.getElementById('cajaTexto');
const boton = document.getElementById('boton');

boton.addEventListener("click", () => numeros.forEach((numero) =>{
    const num = numeroTexto.value;
    if(numero > num){
        console.log("El número " + numero + " es mayor que " + num);
    }
}));
