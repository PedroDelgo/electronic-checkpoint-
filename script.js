
const diaSemana = document.getElementById("dia-semana");
const diaAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");

function updateContentHour(){
    diaAtual.textContent = getCurrentDate();
    horaAtual.textContent = getCurrentTime();
}

function getCurrentTime(){
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function getCurrentDate(){
    const date = new Date();
    let mes = date.getMonth() + 1;
    return date.getDate() +"/"+ mes+ "/" + date.getFullYear();
}

function getWeekDay(){
    const date = new Date();
    return date.getDay();
}

setInterval(updateContentHour,1000);

console.log(getCurrentTime());
console.log(getCurrentDate());
console.log(getWeekDay());