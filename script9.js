// Ejercicio Nº9
// Crear una función que tome un string y cree uno nuevo utilizando las 3 primeras y ultimas letras,
// comprobar que el string de parametro mida al menos 6 caracteres

let palabras = 'mi mama me mima, mi papa se mama.';

function nuevoString(){
    let array = Array.from(palabras)
    let array1 = array.slice([0],[4])
    let array2 = array.slice([29], [32])
    let array3 = array1.concat(array2)
    return array3;
}

console.log(nuevoString());