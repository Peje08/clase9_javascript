// Ejercicio Nº10
// Crear una función que tome dos strings y los concatene sin las primeras 2 letras

let text1 = 'este es el primer texto';
let text2 = 'este es el segundo texto';

function nuevoText() {
    let text3 = text1.slice(2).concat(text2.slice(2))
    return text3
};

console.log(nuevoText());

//podes hacer asi tambien 
//`${str1.slice(2)}${str2.slice(2)}`