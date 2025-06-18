const divareajogo = document.getElementById("areajogo")
const diviniciar = document.getElementById("diviniciar")
function iniciar(){
    fecharbotaoinicio()
    abrirareajogo()
}
function fecharbotaoinicio(){
 diviniciar.innerHTML=""
}

function abrirareajogo(){
  divareajogo.classList.add("answer-btn")
}  let botaopergunta= document.createElement ("button")
    botaopergunta.textContent= perguntas[0]
    areaperguntas.appendChild(botaopergunta)


const perguntas=["Qual é o maior deserto do mundo?",
     "Qual é a capital do Brasil?",
     "Qual é a capital da Austrália?",
     "Qual é o país com maior população no mundo?",
     " Qual a linha imaginária que atravessa o Brasil?",
     "Qual o oceano que banha o Brasil?",
    ]




    