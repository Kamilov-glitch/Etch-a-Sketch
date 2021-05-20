// main();

let size;
function chooseSize() {
    while (true) {
        size = parseInt(prompt('Choose the size of the sketchpad', 16));
        if (size > 100 || size < 2) {
            alert('Please choose a number between 2 and 100.');
        } else if (isNaN(size)) {
            alert('Please choose a number between 2 and 100.');
        } else {
            break;
        }
    }
}

const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('id', 'container');
body.appendChild(container);

const title = document.createElement('div');
title.setAttribute('id', 'title')
const h1 = document.createElement('h1');
h1.textContent = 'Etch - A - Sketch';
h1.style.cssText = 'color: rainbow'
title.appendChild(h1);
body.insertBefore(title, container);

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id', 'btnContainer');
body.appendChild(buttonContainer);

const resizeBtn = document.createElement('button');
resizeBtn.setAttribute('id', 'resizeBtn');
resizeBtn.textContent = 'Resize and/or Start Again';
buttonContainer.appendChild(resizeBtn);

const grayButton = document.createElement('button');
grayButton.textContent = 'Gray Scale';
buttonContainer.appendChild(grayButton);

const rainbowButton = document.createElement('button');
rainbowButton.setAttribute('id', 'rainbowBtn');
rainbowButton.textContent = 'Rainbow Colors';
buttonContainer.appendChild(rainbowButton);

const randomButton = document.createElement('button');
randomButton.setAttribute('id', 'randomBtn');
randomButton.textContent = 'Random Colors';
buttonContainer.appendChild(randomButton);

let grayButtonTrue = false;
grayButton.addEventListener('click', () => {
    grayButtonTrue = true;
    rainbowButtonTrue = false;
    randomButtonTrue = false;
})

let rainbowButtonTrue = false;
rainbowButton.addEventListener('click', () => {
    rainbowButtonTrue = true;
    grayButtonTrue = false;
    randomButtonTrue = false;
})

let randomButtonTrue = false;
randomButton.addEventListener('click', () => {
    randomButtonTrue = true;
    rainbowButtonTrue = false;
    grayButtonTrue = false;
})

function randomColors(div) {
    div.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
}

let rainbowColorNum = 0
function rainbowColors(div) {
    let rainbowArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    div.style.backgroundColor = rainbowArray[rainbowColorNum];
    rainbowColorNum++;
    if (rainbowColorNum === 7) {
        rainbowColorNum = 0;
    };
    
    /*div.style.backgroundColor = 'red';
    div.style.backgroundColor = 'orange';
    div.style.backgroundColor = 'yellow';
    div.style.backgroundColor = 'green';
    div.style.backgroundColor = 'blue';
    div.style.backgroundColor = 'indigo';
    div.style.backgroundColor = 'violet';*/
}

let grayScale = 0.1;
function grayScaleColors(div) {
    if (div.style.backgroundColor === 'black') {
        div.style.opacity = (+div.style.opacity + 0.1).toString();
    } else {
        div.style.cssText = `background-color: black; opacity: 0.1`;
    }
}

let divList;

function createDivs () {
    for (let i = 1; i <= size * size; i++) { // Creating 10 objects
        window["div"+i] = document.createElement('div');
        window["div"+i].setAttribute('id', 'div' + i);
        container.appendChild(window["div" + i]);
    };
    divList = document.querySelectorAll('#container>div');
    divList.forEach(div => {
        div.style.cssText = "background-color: #FF00FF; border: thin solid yellow"; 
        div.classList.add('interior');
        div.addEventListener('mouseover', function() {
            if (grayButtonTrue) {
                grayScaleColors(div);
            } else if (rainbowButtonTrue) {
                rainbowColors(div);
            } else if(randomButtonTrue){
                randomColors(div);
            } else {
                div.style.backgroundColor = 'green';
            }
        })
    })
}

function makeContainerGridy() {
    container.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr); margin: auto; height: 500px; width: 50%`
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

resizeBtn.addEventListener('click', main2);


/* demeli 3 duyme elave edirik:
rainbow;
green;
ve random.
onlara variable baglamaq olar, duymeni bir defe basanda variable true olsun. Bashqa duymeni basanda falseye kecsin avtomatik.
*/