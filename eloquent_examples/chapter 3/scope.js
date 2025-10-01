let x = 10; //global

if (true){
    let y = 20; // local al bloque
    var z = 30; // también global
}

//console.log(y); // No imprimirá que sólo es "visible" dentro del bloque if
console.log(z); // Imprime sin problemas