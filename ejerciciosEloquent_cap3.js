//Mínimo. El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño. Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne su mínimo.

let min = (a,b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
};
console.log(min(0, 10));
  // → 0
console.log(min(0, -10));
  // → -10

/*Recursión. Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:

Zero es par.

Uno es impar.

Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto?*/