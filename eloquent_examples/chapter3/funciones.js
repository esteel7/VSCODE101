const square = function(x){
    return x * x;
};

let x = 12
console.log(`El cuadrado de ${x} es ${square(12)}`);

const makeNoise = function(){
    console.log("¡Pling!")
};

const roundTo = function(n, step){
    let resto = n % step;
    return n - resto + (resto < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10))

//=============== Notación de Declaración ====================//
// NO se requiere el punto y coma aquí. Se puede usar antes de su definición

console.log("El futuro dice:", future());

function future(){
    return "Nunca tendrás autos voladores";
}

//============== Funciones de Flecha ======================//
const paralelo = (a, b) => {return a*b/(a+b)};

console.log(`El paralelo entre 10 y 10 es:  ${paralelo(10,10)}`);

const exponente2 = x => x * x; //Si la función sólo tiene un argumento se puede hacer esto.

console.log(`El ${2} al cuadrado es igual a: ${exponente2(2)}`);