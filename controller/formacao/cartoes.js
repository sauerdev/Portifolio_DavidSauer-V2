// Importações das funções necessárias
import { buscarCartoes } from "./../../services/servicoscartoes.js"

import { mostraTelaAtt } from "../../services/telaatt.js";
import { mostraTelaCad } from "../../services/telacad.js";
import { mostraTelaDel } from "../../services/exlcuirCartao.js";

let section = document.getElementById('cartoes'); 

export async function criarCartoes() {
    section.innerHTML = ''; // Limpa o conteúdo atual da seção

    const cards = await buscarCartoes(); 

    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';

        let h3 = document.createElement('h3');
        h3.textContent = cards[i].nome;
        h3.id = 'titulo'

        let p = document.createElement('p');
        p.textContent = cards[i].descricao;
        p.id = 'paragrafo'

        let infos = document.createElement('div')
        infos.className = 'boxInfos'

        let buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'space-between';
        buttonContainer.id = 'buttonContainer'

        // Botão para excluir
        let button = document.createElement('button')
        button.className = 'btn_card';
        button.textContent = 'EXCLUIR';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.addEventListener('click', ()=>{
            mostraTelaDel(i);
        });

        // Botão para atualizar
        let buttonAtt = document.createElement('button');
        buttonAtt.className = 'btn_card';  
        buttonAtt.textContent = 'ATUALIZAR';
        buttonAtt.addEventListener('click', () => {
            mostraTelaAtt(i); // Passando o índice para a tela de atualização
        });

        // Adiciona botões ao container de botões
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(buttonAtt);

        infos.appendChild(h3)
        infos.appendChild(p)

        // Adiciona elementos ao cartão
        card.appendChild(infos);
        card.appendChild(buttonContainer);

        // Adiciona o cartão à seção
        section.appendChild(card);
    }

    // Botão de adicionar novo cartão
    let cardAdd = document.createElement('button');
    cardAdd.className = 'btn_add_card';
    cardAdd.textContent = '+';
    cardAdd.addEventListener('click', () => {
        mostraTelaCad(); // Abre a tela de cadastro
    });

    section.appendChild(cardAdd);
}
