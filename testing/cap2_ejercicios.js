/*  Ejercicio 1: Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

let numero_filas = 7;
let cadena = "";

for (let i = 0; i < numero_filas; i++){
    cadena += "#";
    console.log(cadena);
}

/*  Ejercicio 2: Escribe un programa que use console.log para imprimir todos los números 
    del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime "Fizz" 
    en lugar del número, y para los números divisibles por 5 (y no por 3), imprime "Buzz" 
    en su lugar.
*/
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0){
        console.log("Fizz");

    } else if ((i % 5 == 0)&&(i % 3 != 0)) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*  Ejercicio 2.5: Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz"
    para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para 
    los números que son divisibles sólo por uno de esos).
*/
for (let i = 1; i <= 100; i++){
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log("FizzBuzz");

    } else if (i % 3 == 0) {
        console.log("Fizz");

    } else if (i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*
La siguiente opción es más limpia y eficiente, ya que aprovecha el cortocircuito
lógico (||) para imprimir el número sólo si la cadena está vacía.
*/

for (let i = 1; i <= 100; i++) {
  let cadena = "";
  if (i % 3 === 0) cadena += "Fizz";
  if (i % 5 === 0) cadena += "Buzz";
  console.log(cadena || i);
}

/*  Ejercicio 3: Escribe un programa que cree una cadena que represente un tablero de 8x8, usando caracteres 
    de salto de línea para separar las líneas. En cada posición del tablero hay un carácter de espacio o un 
    carácter "#". Los caracteres deben formar un tablero de ajedrez.

    Al pasar esta cadena a console.log debería mostrar algo como esto:

     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
*/




/*  Ejercicio 3.5: Cuando tengas un programa que genere este patrón, define una variable size = 8 y cambia el 
    programa para que funcione para cualquier size, generando un tablero con el ancho y alto dados.
*/

