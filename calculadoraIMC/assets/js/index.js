const form = document.getElementById("form");
const imcOutput = document.getElementById("imc");
const resultOutput = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    let weight = parseFloat(formData.get("weight"));
    let height = parseFloat(formData.get("height"));

    console.log(weight);
    console.log(height);

    const imc = (weight / (height * height)) * 10000;
    imcOutput.textContent = `Seu IMC é ${imc.toFixed(2)}`;
    console.log(imc)
    if (imc < 18.5) {
        resultOutput.textContent = "Você está Abaixo do peso!";
    } else if (imc >= 18.5 && imc < 25) {
        resultOutput.textContent = "Você está com Peso Normal!";
    } else if (imc >= 25 && imc < 30) {
        resultOutput.textContent = "Você está Sobrepeso!";
    } else if (imc >= 30 && imc < 35) {
        resultOutput.textContent = "Você está com Obesidade grau 1!";
    } else if (imc >= 35 && imc < 40) {
        resultOutput.textContent = "Você está com Obesidade grau 2!";
    } else if (imc >= 40) {
        resultOutput.textContent = "Você está com Obesidade grau 3!";
    } else {
    resultOutput.textContent = "Por favor, insira valores válidos de peso e altura.";
    }
})