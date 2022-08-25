//Dado un array de valores, devolver un array truthy 
//(sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test'];

const arrClean = arrDirty.filter(elem => Boolean(elem));

console.log(arrClean);

