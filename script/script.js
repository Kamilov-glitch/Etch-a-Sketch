const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('id', 'container');
container.style.cssText = 'display: grid; grid-template-columns: repeat(16, 1fr) ; grid-template-rows: repeat(16, 1fr); grid-gap: 2px; height: 500px; width: 100%'
body.appendChild(container);

/*let array = [];
for (let i = 1; i <=256; i++) {
    array.push(`div${i}`);
}*/

for (let i = 1; i <= 256; i++) { // Creating 10 objects
    window["div"+i] = document.createElement('div');
    window["div"+i].setAttribute('id', 'div' + i);
    container.appendChild(window["div" + i]);
};
let divList = document.querySelectorAll('#container>div');
divList.forEach(div => {
    div.style.cssText = "background-color: pink"; 
    div.classList.add('interior')
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'green'
    })
})