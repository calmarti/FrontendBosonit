// Dado tres arrays de números, sacar en un nuevo array la intersección de estos.
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];


function findIntersection(arrNumber1, arrNumber2, arrNumber3) {
    const intersectionArr = [...arrNumber1, ...arrNumber2, ...arrNumber3]    
    .filter((elem, index, arr) => arr.indexOf(elem)===index)    //array de valores únicos (no repetidos)
    .filter(elem => arrNumber1.includes(elem) && arrNumber2.includes(elem) && arrNumber3.includes(elem))   //array de intersección
    return intersectionArr;
}


//ejemplo del enunciado:
console.log(findIntersection(arrNumber1, arrNumber2, arrNumber3));

