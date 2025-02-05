import { atualizarCartoes } from "./servicoscartoes.js";

let telaAtt = document.getElementById('telaAtt');
let id;

export function escondeTelaAtt() {
    telaAtt.style.left = '-200vw';
}
export function mostraTelaAtt(i) {
    id = i
    telaAtt.style.left = '0vw'
}
export function recolheDadosAtt() {
    let nome = document.getElementById('nomesAtt');
    let descricao = document.getElementById('descricaoAtt');

    if (nome.value === '' || descricao.value === '') {
        alert('Verifique se todos os campos estão preenchidos');
    } else {
        console.log(id, nome.value, descricao.value);
        atualizarCartoes(id, nome.value, descricao.value);
        escondeTelaAtt();

        nome.value = '';
        descricao.value = '';
    }
}