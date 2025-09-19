function sayHello(name) {
    console.log(`Hello, ${name}`);
}

sayHello("Rodrigo");

let ten = 10;
console.log(ten*ten);

console.log(Math.max(2, 4));

console.log(Number.isNaN("hola"));

if (1+1 == 2) {
    console.log("Es verdad");
}

let numero = 15;

if (numero < 10){
    console.log("Pequeño");
} else if (numero < 100){
    console.log("Mediano");
}else{
    console.log("Grande");
}

numero =0;

while (numero<=12){
    console.log(numero);
    numero+=2;
}