// Ejercicio Nº11
// Comprobar entre dos valores cual es mas cercano al 100

let valor1 = 420
let valor2 = 45

function masCercano(valor1, valor2) {
    if(valor1 - 100 < valor2 - 100){
        console.log(`${valor1}` + ' esta mas cerca del 100')
    }else{
        console.log(`${valor2}` + ' esta mas cerca del 100')
    };
}

console.log(masCercano());