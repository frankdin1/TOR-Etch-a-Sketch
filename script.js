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
const eraser = document.querySelector('#eraser');

gridSquare.setAttribute('id', 'grid-square');
main.appendChild(gridSquare);

displayGridSize();
main.style.flexWrap = 'wrap';

function displayGridSize() {
    gridHeight.innerHTML = slider.value;
    gridWidth.innerHTML = slider.value;
}

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

function blackAndWhiteGrid() {
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

function colorOrBlack() {
    this.classList.toggle('clicked-button');
    if (this.className == 'clicked-button') {
        multiColorGrid();
        eraser.classList.remove('clicked-button');
    } else if (this.className == '' && eraser.className == "") {
        blackAndWhiteGrid();
    }
}

function erase() {
    this.classList.toggle('clicked-button');
    if (this.className == 'clicked-button') {
        turnGridWhite();
        rgb.classList.remove('clicked-button');
    } else if (this.className == '' && rgb.className == "") {
        blackAndWhiteGrid();
    } else if (this.className == '' && rgb.className == "clicked-button") {
        multiColorGrid();
    }
}

function buttons() {
    rgb.addEventListener('click', colorOrBlack);
    eraser.addEventListener('click', erase);
}

function gridPatternChoice() {
    if (rgb.className) {
        multiColorGrid();
    } else {
        console.log("No class");
        blackAndWhiteGrid();
    }
}
function gamePlay() {

    buttons();
    addGridSquares(slider.value);
    mainChildNodes = document.querySelectorAll("#grid-square");
    blackAndWhiteGrid();

    //This event happens when the slider is moved
    slider.addEventListener('input', function () {
        displayGridSize();
        addGridSquares(slider.value);
        mainChildNodes = document.querySelectorAll("#grid-square")
        gridPatternChoice();
    })
}

gamePlay();