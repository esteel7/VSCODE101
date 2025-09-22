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

console.log(persona instanceof Object); // true, porque todos los objetos en JavaScript son instancias de Object.
console.log(nombres instanceof Array); // true, porque nombres es un array.
console.log(sayHello instanceof Function); // true, porque sayHello es una función.
console.log(numero instanceof Number); // false, porque numero es de tipo primitivo. No debería usarse instanceof con tipos primitivos.
console.log(new Number(numero) instanceof Number); // true, porque aquí estamos usando el objeto Number.

function crearPersona(nombre, edad){
    return {
        nombre: nombre,
        edad: edad
    };
}

// Crear una nueva persona usando la función crearPersona (factory function)
let juan = crearPersona("Juan", 30);
console.log(juan.nombre);
console.log(juan.edad);

// Crear una nueva persona usando un constructor de clase
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