// function Hola(){
//     alert("Hola");
//}

//Hola();

function Cuadrado(n) {
    return n * n
}

let num = Cuadrado(2);

function unaFunción() {
    console.log(1);
    return "Hola";

}

const saludo = unaFunción();
console.log(saludo);

//Parametro en una función
function suma(a, b) {
    return a + b;
}

const Resultado = suma(5 + 20);
console.log(Resultado);

//pasar una función anonima a una función variable
const unafunción = () => {
    console.log(1);
}


// Funciones flechas
unafunción();

var miFunción2 = function (valor) {
    return valor;
}

let miFunción1 = valor => valor;

var sumar2 = function (num, num2) {
    return num + num2;
}

let sumar1 = (num_1, num_2) => num_1 + num_2;

var saludar2 = function () {
    return "Hola Mundo";
}

let saludar1 = () => "Hola Mundo";

console.log(saludar1)


var saludarPersona = function (nombre) {

    var salida = "Hola," + nombre;

    return salida;

}

let saludarPersona2 = nombre => {

    let salida = `Hola ${nombre}`;

    return salida;
}

console.log(saludarPersona("Fernando"));
console.log(saludarPersona2("Melissa"));
