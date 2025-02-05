// Importações das funções necessárias
import { criarCartoes } from "./cartoes.js";
import { escondeTelaCad, mostraTelaCad, recolheDados } from "./../../services/telacad.js";
import { escondeTelaAtt, mostraTelaAtt, recolheDadosAtt } from "./../../services/telaatt.js";

import { escodeTelaDel, recolheDadosDel} from './../../services/exlcuirCartao.js';

window.escodeTelaDel = escodeTelaDel;
window.recolheDadosDel = recolheDadosDel;


// Tornando as funções globais para uso direto no HTML, se necessário
window.escondeTelaCad = escondeTelaCad;
window.mostraTelaCad = mostraTelaCad;
window.recolheDados = recolheDados;
window.escondeTelaAtt = escondeTelaAtt;
window.mostraTelaAtt = mostraTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;

// Carrega os cartões quando o DOM está totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    criarCartoes();
});
