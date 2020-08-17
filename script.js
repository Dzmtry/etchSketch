//Variables

const container = document.querySelector(".container");
let color = "black";
let gridSize;
let gridSelection = document.getElementById("number");

//Functions

function createGrid(y) {
    for (let x = 0; x < (y*y); x++) {
        let cell = document.createElement("div");
        cell.setAttribute("id", x);
        cell.setAttribute("class", "square")
        container.appendChild(cell);
    };
};

function reset() {
    color = "black";
    let cells = [].slice.call(container.children);
    cells.forEach(function(e){
        e.style.backgroundColor = "white";
    });
};

function randomize() {
    let cells = [].slice.call(container.children);
    cells.forEach(function(e){
        e.style.backgroundColor = "white";
        let x = Math.round(Math.random());
        if (x==1){
            e.style.backgroundColor = color;
        } else {
            e.style.backgroundColor = "white";
        }
    });

};

function colorChange(){
    let newColor;
    newColor = document.getElementById("color");
    color = newColor.value;
}

//Event listeners

document.getElementById("container").addEventListener("mouseover", function(e) {
    let cell = e.target;
    cell.style.backgroundColor = color;
}, false); 

document.getElementById("number").addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        let squares = [].slice.call(container.children);
        squares.forEach(function(e){
            e.remove()
        });
        gridSize = gridSelection.value;
        document.documentElement.style.setProperty('--grid-size', gridSize);
        createGrid(gridSize);
        console.log(gridSize);
    };
    }, false);

createGrid(16);