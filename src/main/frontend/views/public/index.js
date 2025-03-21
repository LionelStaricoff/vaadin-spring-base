// Seleccionar el elemento con la clase 'root'
const rootDiv = document.querySelector('#outlet');

// Crear el contenedor principal
const container = document.createElement('div');

// Crear y añadir el primer párrafo
const paragraph1 = document.createElement('p');
paragraph1.textContent = 'Adivina si puedes';
container.appendChild(paragraph1);

// Crear y añadir el segundo párrafo
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Elige un número del 1 al 10';
container.appendChild(paragraph2);

// Crear y añadir el campo de entrada (input)
const input = document.createElement('input');
input.type = 'number';
input.id = 'dato';
input.min = '1';
input.max = '10';
container.appendChild(input);

// Añadir un salto de línea
container.appendChild(document.createElement('br'));

// Crear y añadir el botón
const button = document.createElement('button');
button.id = 'boton';
button.textContent = 'Enviar';
container.appendChild(button);

// Crear y añadir el contenedor de la imagen
const imageDiv = document.createElement('div');
const image = document.createElement('img');
image.src = '/images/dardo.png';
image.alt = 'Imagen de dardo';
imageDiv.appendChild(image);

// Añadir el contenedor de la imagen al contenedor principal
container.appendChild(imageDiv);

// Añadir el contenedor principal al div con la clase 'root'
if (rootDiv) {
    rootDiv.appendChild(container);
} else {
    console.error('No se encontró un elemento con la clase "root".');
}






















/*
let boton = document.querySelector("#boton");
let input = document.querySelector("#dato");
let pElegir = document.querySelectorAll("p");
*/
let iteradorNumeroAnimado = 0;
let numeroRandom = 0;

function adivinar() {
    numeroRandom = Math.round(Math.random() * 10);
    let dato = parseInt(input.value);

    if (verificarnumeros(dato)) {
        paragraph2.innerText = "Elige un número del 1 al 10 ";
        paragraph2.style.color = "white";
        paragraph2.style.fontSize = "2em";
        numeroAnimado();
    } else {
        paragraph2.innerText = "Ingrese solo 1 numero del 1 al 10"
       paragraph2.style.color = "red";
        paragraph2.style.fontSize = "3em";
    }
    setTimeout( "ganastePerdiste()",13000);
   
}

//verifica que sean numeros del 1 al 10 regresa true
function verificarnumeros(dato) {
    let pattern =[1,2,3,4,5,6,7,8,9,10];
    let result = pattern.includes(dato);
    return result;
}


function ganastePerdiste() {
   
     let   numeber = (numeroRandom == parseInt(input.value))?" ganaste" : " perdiste ";
   paragraph2.innerText = numeber
    paragraph2.style.color = "orange";
}

function numeroAnimado() {
    paragraph1.innerText = iteradorNumeroAnimado++;
    const myTimeout = setTimeout("numeroAnimado()", 500);
    if (iteradorNumeroAnimado > 10) {
        clearTimeout(myTimeout);

    }
    if (iteradorNumeroAnimado > 10) {
        numeroAnimadoParar();
    }
}

function numeroAnimadoParar() {

    paragraph1.innerText = iteradorNumeroAnimado--;
    const myTimeout2 = setTimeout("numeroAnimadoParar()", 1000);
    if (iteradorNumeroAnimado < numeroRandom) {

        clearTimeout(myTimeout2);

    }
}

function rotarDardo(){
    const dardo = document.querySelector("img");
    dardo.className = "rotar"+ numeroRandom;
    ;
    
}

function rotarDardoInicial(){
    const dardo = document.querySelector("img");
    dardo.className = "rotarInicial";
  
}

button.addEventListener("click", adivinar);
button.addEventListener("mouseout", rotarDardoInicial);
button.addEventListener("click", rotarDardo);
