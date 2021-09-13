"use strict"

const lampada = document.getElementById("semaforo")
let idInterval 

function semaforoDesligado(){
    return !semaforo.src.includes("semaforo")
}

function ascenderVermelho(){
    if(semaforoDesligado){
    lampada.src="img/vermelho.png"
    }
}

function ascenderAmarelo(){
    if(semaforoDesligado){
    lampada.src="img/amarelo.png"
    }
}
function ascenderVerde(){
    if(semaforoDesligado){
    lampada.src="img/verde.png"
    }
}

function trocarImagem(){
    if (semaforoDesligado())
        ascenderVermelho()
    else{
        ascenderVerde()
    }if(semaforoDesligado()){
        ascenderAmarelo()
    }
    
}

function ligarAutomatico(){
  idInterval = setInterval(trocarImagem, 1000)
}

//Eventos

document.getElementById("vermelho").addEventListener ("click", ascenderVermelho)
document.getElementById("amarelo").addEventListener ("click", ascenderAmarelo)
document.getElementById("verde").addEventListener ("click", ascenderVerde)
document.getElementById("automatico").addEventListener ("click", ligarAutomatico)