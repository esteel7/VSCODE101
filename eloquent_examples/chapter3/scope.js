let x = 10; //global

if (true){
    let y = 20; // local al bloque
    var z = 30; // también global
}

//console.log(y); // No imprimirá que sólo es "visible" dentro del bloque if
console.log(z); // Imprime sin problemas

//======================= ENLACES Y ÁMBITOS =======================//

/* En el siguiente ejemplo, cuando el código dentro de la función halve 
hace referencia a n, está viendo su propio n, no el n global.*/

const halve = function(n){
    return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

//======================== ÁMBITO ANIDADO ========================//
const hummus = function(factor) {

    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += "s";
        };
        console.log(`${ingredientAmount} ${unit} de ${name}`);
    };
    ingredient(1, "lata", "garbanzos");
    ingredient(0.25, "taza", "tahini");
    ingredient(0.25, "taza", "jugo de limón");
    ingredient(1, "diente", "ajo");
    ingredient(2, "cucharada", "aceite de oliva");
    ingredient(0.5, "cucharada", "comino");
};
hummus(3);
