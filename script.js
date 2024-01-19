"use strict";

const main = document.querySelector("#main");
const slider = document.querySelector("input");
const gridSize = document.querySelector("#grid-size");
const gridHeight = document.querySelector('#grid-height')
const gridWidth = document.querySelector('#grid-width')
let gridSquare;
gridHeight.innerHTML = slider.value;
gridWidth.innerHTML = slider.value;
main.style.flexWrap = 'wrap';

function addGridSquares(gridDims) {
    const mainDimensionInInt = parseFloat(main.clientHeight - main.offsetTop)

    //If there are any childNodes, remove them to make way for the new childnodes that will show up every time the eventlistener is run.
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
    let gridSquareBorderWidthInInt;

    for (let i = 0; i < gridDims; i++) {
        console.log("Slider value in addGridSquares method: ", gridDims)
        for (let j = 0; j < gridDims; j++) {
            gridSquare = document.createElement('div');
            console.log(gridSquare.style.display)
            gridSquare.style.border = "blue 2px solid";
            gridSquareBorderWidthInInt = parseFloat(gridSquare.style.borderWidth)
            gridSquare.style.width = (mainDimensionInInt / gridDims) - 2 * gridSquareBorderWidthInInt.toString() + 'px';
            gridSquare.style.height = gridSquare.style.width;
            main.appendChild(gridSquare);
        }
    }
}

addGridSquares(slider.value);

slider.addEventListener('input', function () {
    gridHeight.innerHTML = slider.value;
    gridWidth.innerHTML = slider.value;
    addGridSquares(slider.value);
})