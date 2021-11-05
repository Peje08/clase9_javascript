// Ejercicio Nº6:
// Crear una función que concatene 2 arrays

let arr1 = [1,2,3];
let arr2 = [4,5,6];


function joinArrays(arr1, arr2){
    let arr3 = arr1.concat(arr2);
    return arr3;
}


console.log(joinArrays())