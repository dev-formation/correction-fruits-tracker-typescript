/**
 * Completer cette fonction 
 * 
 */
function track() {

}









/******************************************************
 * LE CODE CI-DESSOUS FAIT FONCTIONNER LA PAGE TU PEUX
 * LE MODIFIER POUR COMPRENDRE COMMENT IL FONCTIONNE
 * MAIS ATTENTION DE NE PAS L'EFFACER...
 ******************************************************
 */

const BTN_ADD = document.querySelector('#add');
const BTN_REMOVE = document.querySelector('#remove');
const LIST = document.querySelector('#fruitList');
const MSG_SUCCESS = document.querySelector('#success');
const MSG_FAIL = document.querySelector('#fail');

const listVeg = ['🍏 Pomme verte', '🍎 Pomme rouge', '🍐 Poire', '🍊 Orange', '🍋 Citron', '🍌 Banane', '🍉 Pastèque', '🍓 Fraise', '🍆 Aubergine', '🍅 Tomate', '🥑 Avocat', '🥦 Brocoli', '🥒 Cocombre', '🫑 Poivron', '🥕 Carotte'];

BTN_ADD.addEventListener('click', function () {
    const vege = getRandomElement(listVeg);
    LIST.innerHTML += (`<li class="list-group-item">${vege}</li>`);
    check();
})

BTN_REMOVE.addEventListener('click', function () {
    if(LIST.lastChild) {
        LIST.removeChild(LIST.lastChild);
    }
    check();
})

function getRandomElement(list) {
    const randomIndex = Math.floor((Math.random() * list.length));
    console.log(randomIndex);
    return list[randomIndex];
}

function check() {
    if(track(LIST.childNodes)) {
        MSG_SUCCESS.classList.remove('invisible');
        MSG_FAIL.classList.add('invisible');
    } else {
        MSG_SUCCESS.classList.add('invisible');
        MSG_FAIL.classList.remove('invisible');
    }
}