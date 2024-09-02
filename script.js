
const diaSemana = document.getElementById("dia-semana");
const diaAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const bntRegistrarPonto = document.getElementById("bnt-registrar")
const dialogPonto = document.getElementById("dialog-ponto")
const bntDialogFechar = document.getElementById("dialog-fechar");
const dialogData = document.getElementById("dialog-data");
const dialogHora = document.getElementById("dialog-hora");


// to do: 
// criar um evento quando o usuario for colocar as informações no dialog
// recuperar as inforamções
// data, hora, localização (lat, long), tipo: entrada
// Salvar essas informações num objeto JavaScript


navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
});

//////////////////////////////
//Função pra fechar o Dialog//
//////////////////////////////

bntDialogFechar.addEventListener("click", () =>{
    dialogPonto.close();
})

//////////////////////////////
//Função pra abrir o dialog //
//////////////////////////////

bntRegistrarPonto.addEventListener("click", () => {
    dialogPonto.showModal();
    bntRegistrarPonto.showDialog
})


////////////////////////////////////////
//Função pra atualizar a data e a hora//
////////////////////////////////////////

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

dialogHora.textContent = getCurrentTime();

///////////////////////////////////////
//Função que pega o dia o mes e o ano//
///////////////////////////////////////
function getCurrentDate(){
    const date = new Date();
    let mes = date.getMonth() + 1;
    return String(date.getDate()).padStart(2,"0") +"/"+ String(mes).padStart(2,"0")+ "/" + String(date.getFullYear()).padStart(2,"0");
}

dialogData.textContent = getCurrentDate();

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