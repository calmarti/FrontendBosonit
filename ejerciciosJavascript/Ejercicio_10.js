// Crea una función que elimine las etiquetas html o xml de un string.
// La función debe tener un string como único parámetro.
// Ejemplo de uso de la función:
// const result = removeHTMLTags('<div><span>lorem</span>
// <strong>ipsum</strong></div>');
// console.log(result); // lorem ipsum


function removeHTMLTags(str){
    const regex = /(<\w*>|<\/\w+>)/g
    return str.replaceAll(regex," ").trim().split("  ").join(" ")
}


//ejemplo del enunciado:
const result = removeHTMLTags('<div><span>lorem</span><strong>ipsum</strong></div>');
console.log(result); 


//test
const assert = require('assert');
assert.strictEqual(removeHTMLTags('<div><span>lorem</span><strong>ipsum</strong></div>'), 'lorem ipsum');

