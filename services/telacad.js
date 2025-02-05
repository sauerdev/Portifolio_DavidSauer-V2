import { cadastrarCartoes } from "./servicoscartoes.js";

let telaCad = document.getElementById('telaCad');


const limiteNome = 50;  
const limiteDescricao = 100;  

const nomeInput = document.getElementById('nome');
const descricaoInput = document.getElementById('descricao');
const contadorNome = document.getElementById('contador-nome');
const contadorDescricao = document.getElementById('contador-descricao');


function atualizarContador(input, contador, limite) {
    const comprimento = input.value.length;
    contador.textContent = `${comprimento}/${limite}`;


    if (comprimento === limite) {
        contador.classList.add('contador-limite');
    } else {
        contador.classList.remove('contador-limite');
    }
}

nomeInput.addEventListener('input', () => {
    atualizarContador(nomeInput, contadorNome, limiteNome);
});

descricaoInput.addEventListener('input', () => {
    atualizarContador(descricaoInput, contadorDescricao, limiteDescricao);
});

export function escondeTelaCad() {
    telaCad.style.left = '-100vw';
}

export function mostraTelaCad() {
    telaCad.style.left = '0vw';
}

export function recolheDados() {
    let nome = document.getElementById('nome');
    let descricao = document.getElementById('descricao');

    // Valida se os campos estão preenchidos
    if (nome.value === '' || descricao.value === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
    
        cadastrarCartoes(nome.value, descricao.value);
        escondeTelaCad();

        nome.value = '';
        descricao.value = '';
    }
}
