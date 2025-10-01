let x = 10; //global

if (true){
    let y = 20; // local al bloque
    var z = 30; // también global
}

//console.log(y); // No imprimirá que sólo es "visible" dentro del bloque if
console.log(z); // Imprime sin problemas

/*
En el siguiente ejemplo, cuando el código dentro de la función halve hace referencia 
a n, está viendo su propio n, no el n global.
*/
const halve = function(n){
    return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10