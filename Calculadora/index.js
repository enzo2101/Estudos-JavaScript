function calcular(operador, ...numeros) {
  let acumulador = 0;

  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  console.log(acumulador);
}

calcular("+", 1, 2, 3, 4, 5, 6, 7);
