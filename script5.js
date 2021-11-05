
// Ejercicio Nº5:
// Crear una funcion que tome un array y lo invierta sin cambiar el original.

let arr4 = [4, 5, 6, 7, 50]

function reverseArray(arr){
    return arr.map(function reverse(v){
        return v.reverse()});
}

console.log(reverseArray(arr4))