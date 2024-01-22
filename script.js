"use strict";

const main = document.querySelector("#main");
const slider = document.querySelector("input");
const gridSize = document.querySelector("#grid-size");
const gridHeight = document.querySelector('#grid-height')
const gridWidth = document.querySelector('#grid-width')
let gridSquare = document.createElement('div');
let mainChildNodes;
const rgb = document.querySelector('#multicolor');
const clickedButton = document.querySelector('.clicked-button');

gridSquare.setAttribute('id', 'grid-square');
main.appendChild(gridSquare);

gridHeight.innerHTML = slider.value;
gridWidth.innerHTML = slider.value;
main.style.flexWrap = 'wrap';

function addGridSquares(gridDims) {
    //In the browser, under developer tools, if you run `console.dir(main), you will see the values of clientHeight and offsetTop
    const mainDimensionInInt = parseFloat(main.clientHeight - main.offsetTop)

    //If there are any childNodes, remove them to make way for the new childnodes that will show up every time the eventlistener is run.
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }

    for (let i = 0; i < gridDims; i++) {
        for (let j = 0; j < gridDims; j++) {
            gridSquare = document.createElement('div');
            gridSquare.setAttribute('id', 'grid-square');
            gridSquare.style.backgroundColor = 'white';
            gridSquare.style.border = "blue 2px solid";
            const gridSquareBorderWidthInInt = parseFloat(gridSquare.style.borderWidth)
            gridSquare.style.width = (mainDimensionInInt / gridDims) - 2 * gridSquareBorderWidthInInt.toString() + 'px';
            gridSquare.style.height = gridSquare.style.width;
            main.appendChild(gridSquare);

        }
    }
}

function turnGridBlack() {
    for (let i = 0; i < mainChildNodes.length; i++) {
        mainChildNodes[i].addEventListener('mouseover', function () {
            mainChildNodes[i].style.backgroundColor = 'black';
        })
    }
}

function createRandomColors() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    let colors = [red, blue, green];
    return colors;
}

function multiColorGrid() {
    for (let i = 0; i < mainChildNodes.length; i++) {
        mainChildNodes[i].addEventListener('mouseover', function () {
            let colors = createRandomColors();
            mainChildNodes[i].style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
        })
    }
}

function turnGridWhite() {
    for (let i = 0; i < mainChildNodes.length; i++) {
        mainChildNodes[i].addEventListener('mouseover', function () {
            mainChildNodes[i].style.backgroundColor = 'white';
        })
    }
}

function clickRGB() {
    this.classList.toggle('clicked-button');
    if (this.className == 'clicked-button') {
        console.log('class = clicked')
        multiColorGrid();
    } else {
        turnGridBlack();
    }
}
rgb.addEventListener('click', clickRGB);

//This will set the initial value of the grid when open the page.
addGridSquares(slider.value);

mainChildNodes = document.querySelectorAll("#grid-square");
turnGridBlack();

//Every time the slider moves, its value will be displayed on screen, and the addGridSquares function will run.
slider.addEventListener('input', function () {
    gridHeight.innerHTML = slider.value;
    gridWidth.innerHTML = slider.value;
    addGridSquares(slider.value);
    mainChildNodes = document.querySelectorAll("#grid-square")

    //turnGridBlack();

})

