
const diaSemana = document.getElementById("dia-semana");
const diaAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const bntRegistrarPonto = document.getElementById("bnt-registrar")
const dialogPonto = document.getElementById("dialog-ponto")
const bntDialogFechar = document.getElementById("dialog-fechar");
const dialogData = document.getElementById("dialog-data");
const dialogHora = document.getElementById("dialog-hora");
const bntDialogSaida = document.getElementById ("bnt-dialog-saida")
const bntDialogRegister = document.getElementById("bnt-dialog-register-checkpoint");
const selectRegister = document.getElementById("selectRegister");
const alertaSucesso = document.getElementById("alerta-ponto-registrado");
//bntDialogSaida.addEventListener("click", ()=> )




function saveRegisterLocalStorage(register) {

    registersLocalStorage.push(register);

    localStorage.setItem("register", JSON.stringify(registersLocalStorage));
}
    

function getRegisterLocalStorage(key) {

    let registers = localStorage.getItem(key);

    if(!registers) {
        return [];
    }

    return JSON.parse(registers);
}

let registersLocalStorage = getRegisterLocalStorage("register");

function getObjectRegister(registerType){
    let ponto = {
        "date": getCurrentDate(),
        "hour":getCurrentTime(),
        "location": getUserLocation(),
        "id": 1,
        "type": registerType
    }
    return console.log(ponto)
}

bntDialogRegister.addEventListener("click", ()=>{
    let register = getObjectRegister(selectRegister.value);
    saveRegisterLocalStorage(register);

    localStorage.setItem("lastTypeRegister", selectRegister.value);

    alertaSucesso.classList.remove("hidden");
    alertaSucesso.classList.add("show");

    setTimeout(() => {
        alertaSucesso.classList.remove("show");
        alertaSucesso.classList.add("hidden");
    }, 5000);
})




// to do: 
// criar um evento quando o usuario for colocar as informações no dialog
// recuperar as inforamções
// data, hora, localização (lat, long), tipo: entrada
// Salvar essas informações num objeto JavaScript




function getUserLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
        let userLocation = {
            "lat": position.coords.latitude,
            "long": position.coords.longitude 
        }
        return userLocation;
    });
}
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