
const diaSemana = document.getElementById("dia-semana");
const diaAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const bntRegistrarPonto = document.getElementById("bnt-registrar")

bntRegistrarPonto.addEventListener("click",register);

function register(){
    alert("Bater ponto")
}

function updateContentHour(){
    diaAtual.textContent = getCurrentDate();
    horaAtual.textContent = getCurrentTime();
}

function getCurrentTime(){
    const date = new Date();
    return String(date.getHours()).padStart(2,"0") + ":" + String(date.getMinutes()).padStart(2,"0") + ":" + String(date.getSeconds()).padStart(2,"0");
}

function getCurrentDate(){
    const date = new Date();
    let mes = date.getMonth() + 1;
    return String(date.getDate()).padStart(2,"0") +"/"+ String(mes).padStart(2,"0")+ "/" + String(date.getFullYear()).padStart(2,"0");
}

function getWeekDay(){
    const date = new Date();
    let day = date.getDay();
    const dayNames = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
    return dayNames[day];
}

setInterval(updateContentHour,1000);

console.log(getCurrentTime());
console.log(getCurrentDate());
console.log(getWeekDay());