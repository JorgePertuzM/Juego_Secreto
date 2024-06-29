let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
console.log(numeroSecreto);

// Funcion para asignar texto a elementos
function asignarTextoElemento(elemento, texto) {
  //Acceder a un elemento del HTML
  let elementoHtml = document.querySelector(elemento);
  // Asignar un texto a una etiqueta 
  elementoHtml.innerHTML = texto;
  return;
}

// Funcion para validar intento del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el múmero secreto en ${intentos} ${(intentos === 1) ? 'vez.' : 'veces.'}`);

        // Activar Boton de nuevo Juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // Si no acierta
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor.');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearón todos los npumeros posibles');
    } else{

        // Si el numero Generado esta incluido en la lista hacemos una condicion.
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// Limpiar Caja de texto
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un numero entre 1 y ${numeroMaximo}.`);
    // Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Inicializar Intentos.
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la limpiarCaja.
    limpiarCaja();
    // Reiniciar Mensages iniciales.
    // Generar el numero aleatorio
    // Inicializar Intentos.
    condicionesIniciales(); 
    // Deshabilitar el boton (reiniciar)
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




/*
// Declaracion y Asignacion de Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;

console.log(typeof(numeroSecreto));

//Bucles
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Ingresa un numero entre 1 y ${numeroMaximoPosible} por favor:`));

    // Mostrar en consola
    console.log(typeof(numeroUsuario));

    // Condiocion If
    // Comparar si numeroUsuario es igual a numeroSecreto
    if(numeroSecreto == numeroUsuario){
        // Cuando SI se cimple la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); // Las coma (`)se consigue con Alt Gr + }
    } else{
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else{
            alert('El número secreto es mayor');
        }
        // Incrementar el contador cuando el jugador no acierta...
        //intentos = intentos + 1;
        //intentos += 1;
        intentos ++;
        palabraVeces = 'veces';

        // limitar los intentos
        if (intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        // Cuando NO se cimple la condicion
        //alert('Lo siento, no adivinaste el numero secreto');
    }
}
*/
