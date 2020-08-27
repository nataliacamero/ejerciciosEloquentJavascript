//Mínimo. El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño. Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne su mínimo.

let min = (a,b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
};
console.log("Minimo",min(0, 10));
  // → 0
console.log("Minimo",min(0, -10));
  // → -10

/*Recursión. Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:

Zero es par.

Uno es impar.

Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto?*/

// Tu codigo aqui.

function esPar(x) {

    if (x < 0) return 0; 
    if (x % 2 === 0) {
        return true;
    } else if (x % 2 === 1) {
        return false;
    }	else {
        return esPar(x -2);
    }
   };
  
  console.log("Recursión",esPar(50));
  // → true
  console.log("Recursión",esPar(75));
  // → false
  console.log("Recursión",esPar(-1));
  // → ??


/*Conteo de frijoles
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo, "f"). El primer carácter tiene posición cero, lo que hace que el último se encuentre en la posición string.length - 1. En otras palabras, un string de dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.
Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya en el string.
Despues, escribe una función llamada contarCaracteres que se comporte como contarFs, excepto que toma un segundo argumento que indica el carácter que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula). Reescribe contarFs para que haga uso de esta nueva función.*/

let contarFs = (string) => {
 return contarCaracteres(string,"F")
  /*let contador = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "F") contador++;
    };
    return contador
   */
};
   
let contarCaracteres = (string, caracter) => {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
       if (string[i] === caracter) {
         contador++
    };
  };
  return contador
}
console.log("ConnteoFrijoles",contarFs("FFC"));
// → 2
console.log("ConnteoFrijoles",contarCaracteres("kakkerlak", "k"));
// → 4