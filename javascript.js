//create main container through DOM method
function createDiv(){
    const mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute("id","mainDiv");
}

//initialize the main container
createDiv();

//grid container
function createGrid(){
    const mainGrid = document.createElement("div");
    mainDiv.appendChild(mainGrid);
    mainGrid.setAttribute("id", "mainGrid");
}

//initialize the grid container
createGrid();