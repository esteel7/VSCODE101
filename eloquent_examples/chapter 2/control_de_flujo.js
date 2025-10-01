/* Ejemplos IF */

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

/* Ejemplos WHILE y FOR */

// Ejemplo 1
numero =0;

while (numero<=12){
    console.log(numero);
    numero+=2;
}

// Ejemplo 2
console.log("\nUsando for:");
for (let i=0; i<5; i++){
    console.log(i);
}

// Ejemplo 3
let nombres = ["Ana", "Juana", "Carlos"];

console.log("\nIterando sobre un array:");

for (let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}

// Ejemplo 4
console.log("\nUsando forEach:");

nombres.forEach(function(nombre){
    console.log(nombre);
});

// Ejemplo 5
let result = 1;
let counter = 0;

while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result) // 1024

// Ejemplo 6: Se busca el primer número mayor o igual a 20 y divisible por 7
for (let actual = 20; ; actual++){
    if (actual % 7 == 0){
        console.log(actual);
        break;
    }
}
//Resultado: 21