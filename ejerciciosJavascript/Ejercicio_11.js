// Crea una función que tome un array como parametro y lo divida en arrays
// nuevos con tantos elementos como sean especificados.
// La función debe tener dos parámetros:
// ● El primer parámetro es el array entero que se quiere dividir.
// ● El segundo parámetro es el número de elementos que deben tener los
// arrays en los que se divida el array original del primer parámetro.
// Ejemplo de uso de la función:
// const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]


function splitArrayIntoChunks(arr, n) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += n) {
        newArr.push(arr.slice(i, i + n));
    }
    return newArr;
}


//ejemplo del enunciado
const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); 


