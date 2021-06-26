const gridContainer = document.querySelector(".grid-container");    
const gridButton = document.querySelector(".grid-button");
const colorButton = document.querySelector(".color-button");
const resetButton = document.querySelector(".reset-button");
//Default grid 16x16
createNewGrid(16);

function createNewGrid(size){
    gridContainer.textContent ="";
    gridContainer.style.gridTemplateColumns=`repeat(${size},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
    for(i=0; i<size*size;i++){
        let box = document.createElement("div");
        gridContainer.appendChild(box);
    }
    let boxes =gridContainer.querySelectorAll("div");
    boxes.forEach((box)=>box.classList.add("div"));
}
function createGridByInput(){
    let input= parseInt(prompt("Please enter the desired size"));
    if(isNaN(input)){
        alert("Please enter a number");
        createGridByInput();
    }else if(input<1||input>64){
        alert("Please enter a number within the 1-64 range");
        createGridByInput();
    }else{
        createNewGrid(input);
    }

}









//Event listener
gridButton.addEventListener("click",createGridByInput);  
