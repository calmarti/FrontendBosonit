// Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales 
//con unos nuevos parámetros que sean city y isSpain. 
// El valor de isSpain será un booleano indicando si es una ciudad de España.


const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
]

const newArrNonCapitalCities = arrCities2
.filter(elem => elem.capital===false)
.map(elem => ({ city: elem.city, isSpain: elem.country === 'Spain' ? true : false }))


console.log(newArrNonCapitalCities);


//test
const assert = require('assert');
 assert.deepEqual(newArrNonCapitalCities,
     [{city: 'Logroño', isSpain:true}, {city: 'Bordeaux', isSpain: false}, {city: 'Jaén', isSpain: true}]);