// Crea una función que convierta un número de bytes en un formato con valores
// legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// ● Primer parámetro debe ser el número de bytes
// ● Segundo parámetro debe ser un número especificando la cantidad de
// dígitos a los que se debe truncar el resultado (esto se puede hacer
// con Number.prototype.toPrecision()). Por defecto, este parámetro debe
// de tener un valor de 3.

// Ejemplo de uso de la función:
// const result = fromBytesToFormattedSizeUnits(1000);
// console.log(result); // 1KB
// const result = fromBytesToFormattedSizeUnits(123456789);
// console.log(result); // 123MB
// const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
// console.log(result); // -12.145GB


function fromBytesToFormattedSizeUnits(bytes, n = 3) {

    switch (true) {

        case (Math.abs(bytes) >= 0 && Math.abs(bytes) < 1000):
            return `${Number((bytes).toPrecision(n))}B`;

        case (Math.abs(bytes) >= 1000 && Math.abs(bytes) < (1000 ** 2)):
            return `${Number(((bytes / 1000)).toPrecision(n))}KB`;

        case (Math.abs(bytes) >= (1000 ** 2) && Math.abs(bytes) < (1000 ** 3)):
            return `${Number((bytes / 1000 ** 2).toPrecision(n))}MB`;

        case (Math.abs(bytes) >= (1000 ** 3) && Math.abs(bytes) < (1000 ** 4)):
            return `${Number((bytes / 1000 ** 3).toPrecision(n))}GB`;

        case (Math.abs(bytes) >= (1000 ** 4) && Math.abs(bytes) < (1000 ** 5)):
            return `${Number((bytes / 1000 ** 4).toPrecision(n))}TB`;

        case (bytes >= (1000 ** 5) && bytes < (1000 ** 6)):
            return `${Number((bytes / 1000 ** 5).toPrecision(n))}PB`;

        case (bytes >= (1000 ** 6) && bytes < (1000 ** 7)):
            return `${Number((bytes / 1000 ** 6).toPrecision(n))}EB`;

        case (bytes >= (1000 ** 7) && bytes < (1000 ** 8)):
            return `${Number((bytes / 1000 ** 7).toPrecision(n))}ZB`;

        case (bytes >= (1000 ** 8) && bytes < (1000 ** 9)):
            return `${Number((bytes / 1000 ** 8).toPrecision(n))}YB`;

        default:
            return 'The number is too large';
    }

}

//ejemplos del enunciado
console.log(fromBytesToFormattedSizeUnits(1000));
console.log(fromBytesToFormattedSizeUnits(123456789));
console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, 5));


//tests
const assert = require('assert');
assert.equal(fromBytesToFormattedSizeUnits(123456789123), "123GB");
assert.equal(fromBytesToFormattedSizeUnits(123456789123456), "123TB");
assert.equal(fromBytesToFormattedSizeUnits(123456789123456789), "123PB");
assert.equal(fromBytesToFormattedSizeUnits(123456789123456789123), "123EB");
assert.equal(fromBytesToFormattedSizeUnits(123456789123456789123456), "123ZB");
assert.equal(fromBytesToFormattedSizeUnits(123456789123456789123456789), "123YB");
assert.equal(fromBytesToFormattedSizeUnits(1234567891234567891234567891), "The number is too large");