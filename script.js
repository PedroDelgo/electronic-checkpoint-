
const diaSemana = document.getElementById("dia-semana");
const diaAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const bntRegistrarPonto = document.getElementById("bnt-registrar")
const dialogPonto = document.getElementById("dialog-ponto")

bntRegistrarPonto.addEventListener("click",register);

dialogPonto.showModal();

//////////////////////////////////////////
//Função pra dar ação ao clicar no botão//
//////////////////////////////////////////

function register(){
    alert("Bater ponto")
}


function updateContentHour(){
    diaAtual.textContent = getCurrentDate();
    horaAtual.textContent = getCurrentTime();
}

////////////////////////////////////////////////
//função q vai dar as horas minutos e segundos//
////////////////////////////////////////////////
function getCurrentTime(){
    const date = new Date();
    return String(date.getHours()).padStart(2,"0") + ":" + String(date.getMinutes()).padStart(2,"0") + ":" + String(date.getSeconds()).padStart(2,"0"); //padStart pega os elemntos em ordem q entram e dps inserem algum valor se o paramtro for valido
}

///////////////////////////////////////
//Função que pega o dia o mes e o ano//
///////////////////////////////////////
function getCurrentDate(){
    const date = new Date();
    let mes = date.getMonth() + 1;
    return String(date.getDate()).padStart(2,"0") +"/"+ String(mes).padStart(2,"0")+ "/" + String(date.getFullYear()).padStart(2,"0");
}

///////////////////////////////////
//Função que pega o dia da semana//
///////////////////////////////////
function getWeekDay(){
    const date = new Date();
    let day = date.getDay();
    const dayNames = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"]; //Subistitui os valores 0 a 6 por dias da semana
    return dayNames[day];
}

/////////////////////////////////////////////
//Fazer que fique atualizando a hora direta//
/////////////////////////////////////////////
setInterval(updateContentHour,1000);

console.log(getCurrentTime());
console.log(getCurrentDate());
console.log(getWeekDay());