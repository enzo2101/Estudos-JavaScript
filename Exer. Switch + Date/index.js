const showData = document.getElementById("data");
const showHora = document.getElementById("hora");

const date = new Date();
let dayWeek = date.getDay();
let month = date.getMonth();
const year = date.getFullYear();

switch(dayWeek) {
    case 0:
        dayWeek = 'Domingo';
        break;
    case 1:
        dayWeek = 'Segunda-feira';
        break;
    case 2:
        dayWeek = 'Terça-feira';
        break;
    case 3:
        dayWeek = 'Quarta-feira';
        break;
    case 4:
        dayWeek = 'Quinta-feira';
        break;
    case 5:
        dayWeek = 'Sexta-feira';
        break;
    case 6:
        dayWeek = 'Sábado';
        break;
}

switch(month) {
    case 0:
        month = 'Janeiro';
        break;
    case 1:
        month = 'Fevereiro';
        break;
    case 2:
        month = 'Março';
        break;
    case 3:
        month = 'Abriu';
        break;
    case 4:
        month = 'Maio';
        break;
    case 5:
        month = 'Junho';
        break;
    case 6:
        month = 'Julho';
        break;
    case 7:
        month = 'Agosto';
        break;
    case 8:
        month = 'Setembro';
        break;
    case 9:
        month = 'Outubro';
        break;
    case 10:
        month = 'Novembro';
        break;
    case 11:
        month = 'Dezembro';
        break;
}

showData.textContent = `${dayWeek}, ${date.getDate()} de ${month} de ${year}`
showHora.textContent = `${date.getHours()}:${date.getMinutes()}`