
// Ejercicio Nº5:
// Crear una funcion que tome un array y lo invierta sin cambiar el original.

function reverseArray(arr){
    return arr.map(function reverse(v){
        return v.reverse()});
}