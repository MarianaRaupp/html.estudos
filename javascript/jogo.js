const botaoiniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const titulopergunta = document.getElementById("titulopergunta")
const proximaper = document.getElementById("proximapergunta")

botaoiniciar.addEventListener("mouseover", iniciarjogo)
proximaper.addEventListener("mouseover", proximapergunta)

const perguntas = [
    {pergunta:"Qual é o maior deserto do mundo?", opcoes:["Saara","Antartida","Amazonia","Atlantico"], correta:["Antartida"]},
    {pergunta: "Qual é a capital do Brasil?", opcoes:["São Paulo","Rio de Janeiro","Brasília","Bahia"], correta:["Brasília"]},
    {pergunta:"Qual é a capital da Austrália?", opcoes:["Melbourne","Camberra","Texas","Paris"], correta:["Camberra"]},
    {pergunta: "Qual é o país com maior população no mundo?", opcoes:["India","China","Brasil","EUA"], correta:["India"]},
    {pergunta:" Qual a linha imaginária que atravessa o Brasil?", opcoes:["Equador","Capricornio","Cancer","Gemeos"], correta:["Equador"]},
    {pergunta: "Qual o oceano que banha o Brasil?", opcoes:["Atlantico","Indico","Pacifico","Nilo"], correta:["Atlantico"]},
]

let botaodepergunta = document.createElement("button")

let indiceperguntas = 0

function iniciarjogo() {  
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio() {
    botaoiniciar.innerHTML = ""
}

function abrirareajogo() {
    divareajogo.classList.add("active")

    titulopergunta.textContent = perguntas[indiceperguntas].pergunta
    areaperguntas.innerHTML = ""

    perguntas[indiceperguntas].opcoes.forEach(opcao => {
    let botaodepergunta = document.createElement("button")
    botaodepergunta.textContent = opcao
    botaodepergunta.classList.add("answer-btn")
    botaodepergunta.addEventListener("mouseover", () => validarrespostacorreta(opcao))
    areaperguntas.appendChild(botaodepergunta)
    
    })
}

function validarrespostacorreta(btnSelecionado){
    const botoesdaTela = document.querySelectorAll(".answer-btn")
    const repostacorreta = perguntas[indiceperguntas].correta[0]
    botoesdaTela.forEach(botao => {
        if(botao.textContent === repostacorreta){
            botao.classList.add("correct")
            botao.classList.add("disabled")
        }
        if(botao.textContent === btnSelecionado && botao.textContent != repostacorreta){
            botao.classList.add("incorrect")
            botao.classList.add("disabled")
        }
    })
}

function proximapergunta(){
    indiceperguntas++
    if(indiceperguntas < perguntas.length)
        abrirareajogo()
    else{
        encerrarjogo()

    }
    
}

function encerrarjogo() {


}