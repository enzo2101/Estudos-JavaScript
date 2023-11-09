let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const numbers = [b, c, a];

[a, b, c] = numbers;

console.log(a, b, c);

// ...rest (pegar o resto), ...spread(distribuir)
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
const [indexUm, indexDois, indexTres, ...resto] = numeros;
console.log(indexUm, indexDois, indexTres);
console.log(resto)

numeros = [...spread, 11000]

console.log(spread)