// Ejercicio Nº3:
// Crear una función que tome un array y devuelva un solo string de cada elemento separado por espacio.

let arr3 = ['hola', 'soy', 'un', 'array'];

function arrayString(e){
    return e.toString().join(' ');
}


console.log('ejercicio3');
console.log(arrayString(arr3));
