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