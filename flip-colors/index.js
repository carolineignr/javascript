const arrNumbers = "0123456789";
const arrLetters = "abcdef";

function getRandomNumber() {
    const randomNumber = arrNumbers[Math.floor(Math.random() * arrNumbers.length)]; 
    return randomNumber;
}

function getRandomLetter() {
    const randomLetter = arrLetters[Math.floor(Math.random() * arrLetters.length)];
    return randomLetter;
}

function getRandomHexItem() {
    const arr = [];
    arr.push(getRandomNumber());
    arr.push(getRandomLetter());

    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    return randomItem;
}

function updateBackgroundColor(mainElement, colorName, color) {
    colorName.innerHTML = color;
    mainElement.style["background"] = color;
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const colorName = document.querySelector('.color');
    const main = document.getElementsByTagName('main')[0];

    btn.addEventListener('click', () => {
        let hexColor = '#';
        for(let i = 0; i < 6; i++) {
            hexColor = hexColor + getRandomHexItem();
        }

        hexColor = hexColor.toUpperCase();

        updateBackgroundColor(main, colorName, hexColor)
    })
})