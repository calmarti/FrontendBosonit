// Crea una función que a partir de un objeto de entrada, retorne un objeto
// asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.
// Ejemplo de uso de la función:
// const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
// const myObjLowercase = toLowercaseKeys(myObject);
// console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }


//TODO: simplificar con Object.keys() u Object.entries()

const toLowercaseKeys = (obj)=>{
    const newObj={}
    Object.keys(obj).forEach(key=>newObj[key.toLowerCase()] = obj[key])
    return newObj
}


//ejemplo del enunciado:    
const myObject = { NamE: 'Charles', ADDress: 'Home Street'};
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); 