let menu = document.getElementById('menu')
let barra1 = document.getElementById('barra1')
let barra2 = document.getElementById('barra2')
let barra3 = document.getElementById('barra3')

export function trocarMenu() {
    if (menu.style.left === '0vw') {
        menu.style.left = '-100vw';

        barra1
        barra2
        barra3

    } else {
        menu.style.left = '0vw'

        barra1.style.position = 'absolute';
        barra1.style.rotate = '135deg';
        barra1.style.alignItems = 'center';
        barra2.style.display = 'none'
        barra3.style.position ='absolute'
        barra3.style.rotate = '-135deg';
        barra3.style.alignItems ='center'
        barra3.style.top ='2.7vh'
    }

}