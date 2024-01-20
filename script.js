"use strict";

const main = document.querySelector("#main");
const slider = document.querySelector("input");
const gridSize = document.querySelector("#grid-size");
const gridHeight = document.querySelector('#grid-height')
const gridWidth = document.querySelector('#grid-width')
let gridSquare = document.createElement('div')
gridSquare.setAttribute('id', 'grid-square');
main.appendChild(gridSquare);

gridHeight.innerHTML = slider.value;
gridWidth.innerHTML = slider.value;
main.style.flexWrap = 'wrap';

function addGridSquares(gridDims) {
    //In the browser, under developer tools, if you run `cosnole.dir(main), you will see the values of clientHeight and offsetTop
    const mainDimensionInInt = parseFloat(main.clientHeight - main.offsetTop)

    //If there are any childNodes, remove them to make way for the new childnodes that will show up every time the eventlistener is run.
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }

    for (let i = 0; i < gridDims; i++) {
        for (let j = 0; j < gridDims; j++) {
            gridSquare = document.createElement('div');
            gridSquare.setAttribute('id', 'grid-square');
            gridSquare.style.border = "blue 2px solid";
            const gridSquareBorderWidthInInt = parseFloat(gridSquare.style.borderWidth)
            gridSquare.style.width = (mainDimensionInInt / gridDims) - 2 * gridSquareBorderWidthInInt.toString() + 'px';
            gridSquare.style.height = gridSquare.style.width;
            main.appendChild(gridSquare);
        }
    }
}

//This will set the initial value of the grid when open the page.
addGridSquares(slider.value);

//Every time the slider moves, its value will be displayed on screen, and the addGridSquares function will run.
slider.addEventListener('input', function () {
    gridHeight.innerHTML = slider.value;
    gridWidth.innerHTML = slider.value;
    addGridSquares(slider.value);
})
const mainChildNodes = document.querySelectorAll("#grid-square")
for (let i = 0; i < mainChildNodes.length; i++) {
    mainChildNodes[i].addEventListener('mouseover', function () {
        console.log('I am hovering');
        mainChildNodes[i].style.backgroundColor = 'black';
    })
}