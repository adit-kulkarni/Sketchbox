const DEFAULTGRIDSIZE = 16;
const hoverStyles = {
    backgroundColor: 'green',
    color: 'yellow',
    transform: 'scale(1.1)',
    cursor: 'pointer'
};

const defaultStyles = {
    backgroundColor: 'blue',
    color: 'white',
    transform: 'scale(1)',
    cursor: 'default'
};

function createGrid(gridSize){
    
    function createDiv(){
        let div = document.createElement('div');
        div.style.backgroundColor = 'grey';
        div.style.width = ((1/gridSize) * 100) + '%';
        div.style.height = ((1/gridSize) * 100) + '%';
        div.style.boxSizing = 'border-box'; 
        div.style.border = '1px solid #000';
        return div;
    }

    function applyStyles(element, styles) {
        Object.assign(element.style, styles);
    }
    
    let gridContainer = document.querySelector('.gridContainer');
    gridContainer.replaceChildren();
    gridContainer.style.display = 'flex';
    gridContainer.style.flexWrap = 'wrap';
    gridContainer.style.height = '100vh'; 
    gridContainer.style.width = '100vw'; 

    for (let index = 0; index < gridSize**2; index++) {
        console.log(index)
        let gridElement = createDiv();

        gridElement.addEventListener('mouseover', () => {
            applyStyles(gridElement, defaultStyles);
        });
        gridContainer.appendChild(gridElement);   
    }
}

function updateGridSizeListener(){
    let btn = document.querySelector('.updateGrid');
    let inputField = document.querySelector('#grid')
    btn.addEventListener('click', () => {
        let gridSize = parseInt(inputField.value);
        if (!isNaN(gridSize) && gridSize > 0) { 
            createGrid(gridSize); 
        } else {
            alert("Please enter a valid number");
        }
    });
}


function runSketchbox(){
    createGrid(DEFAULTGRIDSIZE);
    updateGridSizeListener();
}


document.addEventListener("DOMContentLoaded", runSketchbox);
