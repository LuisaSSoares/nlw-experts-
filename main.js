//lista de perguntas e respostas 
const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação de alto nível.",
            "Um editor de texto.",
            "Um sistema operacional.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 10;",
            "variavel = 10;",
            "variable = 10;",
        ],
        correta: 0
    },
    {
        pergunta: "Como se chama o processo de armazenar dados para uso futuro em JavaScript?",
        respostas: [
            "Conversão",
            "Atribuição",
            "Declaração",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'getElementById' em JavaScript?",
        respostas: [
            "Selecionar um elemento pelo nome da classe.",
            "Selecionar um elemento pelo ID.",
            "Selecionar um elemento pelo nome da tag.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
        respostas: [
            "Boolean",
            "Float",
            "String",
        ],
        correta: 1
    },
    {
        pergunta: "O que significa 'DOM' em JavaScript?",
        respostas: [
            "Document Order Model",
            "Data Object Model",
            "Document Object Model",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
        respostas: [
            "for loop",
            "if...else statement",
            "switch statement",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "log()",
        ],
        correta: 0
    },
    {
        pergunta: "Como se chama a operação que verifica se dois valores são iguais em JavaScript?",
        respostas: [
            "checkEqual()",
            "==",
            "equals()",
        ],
        correta: 1
    },
    {
        pergunta: "O que significa 'typeof' em JavaScript?",
        respostas: [
            "Verifica o tipo de um arquivo.",
            "Retorna o tipo de uma variável.",
            "Converte o tipo de uma variável.",
        ],
        correta: 1
    },
];

// adiciona variável "quiz" a partir de seu id 
const quiz = document.querySelector('#quiz')

//adiciona variável "template" a partir de sua tag.
const template = document.querySelector('template')

//guarda as respostas corretas
const corretas = new Set()

//soma o total de perguntas
const totalDePerguntas = perguntas.length

//mostra as respostas corretas
const mostrarTotal = document.querySelector('#acertos span')

//muda o número de acertos em comparação com o número de perguntas
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


//loop 
for (const item of perguntas) {

    //clona todo o conteúdo do template
    const quizItem = template.content.cloneNode(true)

    //modifica o h3
    quizItem.querySelector('h3').textContent = item.pergunta

    //loop que modifica as respostas a partir da coleta do elemento filho (dt) de seu pai (dl)
    for (let resposta of item.respostas) {
        //procura o dt na div "quizItem e clona tudo que tem nele"
        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        // coloca o textContent "resposta" no span do dt, colocando o conteúdo nele (as respostas das perguntas)
        dt.querySelector('span').textContent = resposta

        //faz com que quando eu trocar de pergunta, a resposta acima não seja modificada.
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))

        //muda o valor dos inputs, coletando seu índice
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        //evento para  comparar e contar as respostas corretas a partir de seu valor.
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        //adiciona as perguntas na tela. Ele coleta os elementos filhos (dt) do elemento pai (dl)
        quizItem.querySelector('dl').appendChild(dt)
}
//remove o bug do "resposta A" da tela
quizItem.querySelector('dl dt').remove()

//coloca a pergunta na tela
quiz.appendChild(quizItem)

}
//alert(perguntas[0].respostas[0].correta)