"use strict";

const main = document.querySelector("#main");
main.style.flexWrap = 'wrap';
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.border = "black 1px solid";
        gridSquare.style.width = '9px';
        gridSquare.style.height = '9px';

        main.appendChild(gridSquare);
    }

}





