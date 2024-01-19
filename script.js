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
    let gridSquareBorderWidthInInt;

    for (let i = 0; i < gridDims; i++) {
        for (let j = 0; j < gridDims; j++) {
            gridSquare = document.createElement('div');
            gridSquare.style.border = "blue 2px solid";
            gridSquareBorderWidthInInt = parseFloat(gridSquare.style.borderWidth)
            gridSquare.style.width = (mainDimensionInInt / gridDims) - 2 * gridSquareBorderWidthInInt.toString() + 'px';
            gridSquare.style.height = gridSquare.style.width;
            main.appendChild(gridSquare);
        }
    }
}

addGridSquares(slider.value);

// const gridSquareWidthInInt = parseFloat(gridSquare.style.width);
// const mainDimensionInInt = parseFloat(main.clientHeight - main.offsetTop)
// const gridSquareBorderWidthInInt = parseFloat(gridSquare.style.borderWidth)
// console.log((mainDimensionInInt / slider.value) - 2 * gridSquareBorderWidthInInt)
// console.log(gridSquareWidthInInt);
// console.log();
// gridSquareWidthInInt) - 2 * parseInt(gridSquare.style.borderWidth)
// slider.addEventListener('input', function () {
//     gridHeight.innerHTML = slider.value;
//     gridWidth.innerHTML = slider.value;
//     addGridSquares(gridHeight.innerHTML);
// })


//To get up to 100 squares on each side, how many pixels would I need?
//1 grid square = 1px border + length
//Main div dimension: 900 X 900 px
//Individual pixel size = (main div dimension / number of pixels) - 2(grid square border radius)


