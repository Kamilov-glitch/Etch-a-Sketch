// main();

let size;
function chooseSize() {
    while (true) {
        size = parseInt(prompt('Choose the size of the sketchpad', 16));
        if (size > 100 || size < 2) {
            alert('Please choose a number between 2 and 100.');
        } else {
            break;
        };
    }
}

const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('id', 'container');
body.appendChild(container);

const title = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = 'Etch - A - Sketch';
title.appendChild(h1);
body.insertBefore(title, container);

const btn = document.createElement('button');
btn.textContent = 'Resize and/or Start Again';
body.appendChild(btn);

let divList;

function createDivs () {
    for (let i = 1; i <= size * size; i++) { // Creating 10 objects
        window["div"+i] = document.createElement('div');
        window["div"+i].setAttribute('id', 'div' + i);
        container.appendChild(window["div" + i]);
    };
    divList = document.querySelectorAll('#container>div');
    divList.forEach(div => {
        div.style.cssText = "background-color: pink"; 
        div.classList.add('interior')
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'green'
        })
    })
}

function makeContainerGridy() {
    container.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr); grid-gap: 1px; height: 500px; width: 100%`
}

function removeDivs () {
    divList.forEach (div => {
        container.removeChild(div);
    })
}

function main() {
    chooseSize();
    makeContainerGridy();
    createDivs();
}
function main2() {
    removeDivs();
    chooseSize();
    makeContainerGridy();
    createDivs();
}

main();

btn.addEventListener('click', main2);