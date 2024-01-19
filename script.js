"use strict";

const main = document.querySelector("#main");
let gridSquare;
const slider = document.querySelector("input");
const gridSize = document.querySelector("#grid-size");
main.style.flexWrap = 'wrap';

function addGridSquares() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            gridSquare = document.createElement('div');;
            gridSquare.style.border = "blue 2px solid";
            gridSquare.style.width = '52.25px';
            gridSquare.style.height = gridSquare.style.width;
            main.appendChild(gridSquare);
        }

    }
}

addGridSquares();
slider.addEventListener('input', function () {
    gridSize.innerHTML = this.value;
})


//To get up to 100 squares on each side, how many pixels would I need?
//1 grid square = 1px border + length
//Main div dimension: 900 X 900 px
//Individual pixel size = (main div dimension / number of pixels) - 2(grid square border radius)


