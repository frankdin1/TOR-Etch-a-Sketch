"use strict";

const main = document.querySelector("#main");

for (let i = 0; i < 10; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.style.border = "black 1px solid";
    gridSquare.style.width = '10px';
    gridSquare.style.height = '10px';
    main.appendChild(gridSquare);
}




