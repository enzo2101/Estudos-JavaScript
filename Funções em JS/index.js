// independente de onde for declarada a função vai ser executada aonde for chamada
// function hoisting
minhaFuncao();
function minhaFuncao() {
    console.log('Minha Função hoisting')
}

// função declarada primeiro depois chama a funcção
// a EXPRESSION FUNCTION também possibilita ser chamada por outra função
// expression function
const souUmDado = function() {
    console.log('Sou um Dado');
}
souUmDado();

// criando uma função hoisting para executar uma expression function
function executadorFuncao(funcao) {
    console.log('Irei executar a função passada...')
    funcao();
}

executadorFuncao(souUmDado);

// Arrow Function
// Assim como a expression function a arrow function pode ser chamada por outra função, ou seja, uma arrow function é uma expression function do Ecma Script 6
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function')
}

executadorFuncao(funcaoArrow);

// Função dentro de um objeto
// Esse tipo de função dentro de objeto não pode ser chamado por outra função, igual a Arrow function ou Expression function

const objeto = {
    falar() {
        console.log('Falando...')
    }
}

objeto.falar();