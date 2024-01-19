"use strict";

const main = document.querySelector("#main");
main.style.flexWrap = 'wrap';
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.border = "blue 1px solid";
        gridSquare.style.width = '54px';
        gridSquare.style.height = '54px';

        main.appendChild(gridSquare);
    }

}


//For a main box of width 110px and height 110px:
//grid square borders: 1px
//10 X 10 grid: 9px X 9px each
//11 X 11 grid: 8px X 8px each
//For each extra grid square, reduce the length by 1px?

//To get up to 100 squares on each side, how many pixels would I need?
//1 grid square = 1px border + length
//With a div that has length = 1000px


