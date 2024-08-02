Código JS (script.js)

// Mensagem de boas-vindas ao clicar no botão

document.addEventListener('DOMContentLoaded', () => {

const button = document.querySelector('button');

button.addEventListener('click', () => {

alert('Estamos animados para começar o ano com vocês!');

});

// Contador de dias para o início das aulas
const startDate new Date("2024-08-01'); // Defina a data de início das aulas

const hoje nova data():

const time Diff startDate-hoje,

const daysLeftMath.ceil(diferença de tempo/(1000*60*60*24));

const contagem regressiva Elemento document.createElement('p');

countdownElement.textContent Faltam $(daysLeft) dias para o início das aulas!": document.querySelector(card").appendChild(countdown Element);

// Alterar a imagem ao clicar

const imagem document.querySelector("img");

imagem.addEventListener('clique', () => {

imagem.src: download(1).jpeg:

11:

// Mostrar uma mensagem de boas-vindas com animação

const cartão = document.querySelector(.cartão");

cartão.estilo.opacidade=D;

card.style.transition = 'opacidade 2s';

setTimeout(() => {

cartão.estilo.opacidade= 1;

), 100);

});