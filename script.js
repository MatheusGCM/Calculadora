const display = document.querySelector(".display");
const resposta = document.querySelector(".btnResp");

function insert(valor){
    display.innerHTML += valor;
}

function clean(){
    display.innerHTML = "";
}

function backspace(){
    if(display.textContent){
        let aux = document.getElementById("display").innerHTML;
        display.innerHTML = aux.substring(0, aux.length -1);
    }
}

function result(){
    if(display.textContent != 'Erro'){
        document.getElementById("display").innerHTML = eval(display.innerHTML).toFixed(2);
        let aux = document.getElementById("display").innerHTML;
        if(aux.length > 5){
            document.getElementById("display").innerHTML = eval(display.innerHTML).toFixed(2);
        }else{
            document.getElementById("display").innerHTML = eval(display.innerHTML);
        }
    }
}