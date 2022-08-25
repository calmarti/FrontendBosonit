// Crea una función que retorne los campos de un objeto que equivalgan a un
// valor “falsy” después de ser ejecutados por una función específica.
// La función debe tener dos parámetros:
// ● Primer parámetro es un objeto con x número de campos y valores
// ● Segundo parametro es una funcion que retorne un booleano, que se
// tiene que aplicar al objeto del primer parámetro

// Ejemplo de uso de la función:
// const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
// console.log(result); // {a: 1, c: 3}


const func = x => Boolean(x);

function returnFalsyValues(obj, func) {
    for (let key in obj) {
        if (func(obj[key]) === true) {
            delete obj[key];
        }
    }
    return obj;
}


//ejemplo:
console.log(returnFalsyValues({ a:NaN, b:'0', c:0, d:undefined, e:null, f:'false', g:"", h:42, i:false}, func));



//test
const assert = require('assert');
assert.deepEqual(returnFalsyValues(
    {a:NaN, b:'0', c:0, d:undefined, e:null, f:'false', g:"", h:42, i:false }, func), 
    {a:NaN, c:0, d:undefined, e:null, g:"", i:false});
