// function duplica(numero) {
//     return numero * 2;
// }

// function triplica(numero) {
//     return numero * 3;
// }

// function quadriplica(numero) {
//     return numero * 4;
// }

// console.log(duplica(2));
// console.log(triplica(3));
// console.log(quadriplica(4));

//forma mais inteligente de fazer a mesma coisa

function criarMultiplicador(multiplicador) {
    return function (numero) {
        return numero * multiplicador;
    };
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));