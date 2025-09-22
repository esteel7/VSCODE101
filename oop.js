function sayHello() {
    console.log("Hello, World!");
}

let numero = 42;
let nombres = ["Ana", "Juana", "Carlos"];

let persona = {
    nombre: "Ana",
    edad: 25
};

console.log(persona.nombre);
console.log(persona.edad);

persona.altura = 1.75;
console.log(persona.altura);

console.log(Object.keys(persona));
console.log(Object.values(persona));

console.log(typeof persona);
console.log(typeof nombres);
console.log(typeof numero);
console.log(typeof sayHello);

console.log(persona instanceof Object);
console.log(nombres instanceof Array);
console.log(numero instanceof Number);
console.log(sayHello instanceof Function);

function crearPersona(nombre, edad){
    return {
        nombre: nombre,
        edad: edad
    };
}

let juan = crearPersona("Juan", 30);
console.log(juan.nombre);
console.log(juan.edad);

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}  
let maria = new Persona("Maria", 28);
maria.saludar();

console.log(maria instanceof Persona);
console.log(maria instanceof Object);
console.log(maria instanceof Array);

console.log(typeof maria);
console.log(typeof Persona);
console.log(typeof crearPersona);