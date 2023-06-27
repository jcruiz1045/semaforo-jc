const $lucesDelCirculo = document.querySelectorAll('.circulos');
let contadorDeLuz = 0;

const mostrarLuz = () =>{
    $lucesDelCirculo[contadorDeLuz].className = 'circulos';
    contadorDeLuz++;

    if(contadorDeLuz > 2) contadorDeLuz = 0;

    const LuzActual = $lucesDelCirculo[contadorDeLuz];
    LuzActual.classList.add(LuzActual.getAttribute('color'))
}
setInterval(mostrarLuz,1000);



/*function cambiarSemaforo() {
console.log("ROJO");

    setTimeout(function() {

console.log("VERDE");
    setTimeout(function() {

console.log("AMARILLO");
    setTimeout(cambiarSemaforo, 2000);


       }, 2000);    
    }, 2000);   
}
cambiarSemaforo();*/