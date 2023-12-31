//create main container through DOM method
function createDiv(){
    const mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute("id","mainDiv");
}

//initialize the main container
createDiv();

//create grid container through DOM method
function createGrid(){
    const mainGrid = document.createElement("div");
    mainDiv.appendChild(mainGrid);
    mainGrid.setAttribute("id", "mainGrid");
}

//initialize the grid container
createGrid();

//create smaller grid
function createChild(){
 const childDiv = document.createElement("div");

 mainGrid.appendChild(childDiv);
 childDiv.setAttribute("class","childDiv");
 //add eventlistener for changing grid background color on mouse enter
 childDiv.addEventListener(
    "mouseenter",
    (event) => {
       // const randomBetween = (min, max) => min + Math.floor(Math.random()*(max-min + 1));
        //const r = randomBetween(0,255);
        //const g = randomBetween(0,255);
        //const b = randomBetween(0,255);
        //event.target.style.background =`rgb(${r},${g},${b})`;
        event.target.style.background = `rgb(255,255,255)`;
    }
 );   
}

//loop the creation of smaller grid
const size = 16;
function createLoop() {
    for (i=0; i<size*size; i++){
        createChild();
    }
}

//initialize the loop
createLoop();

//create buttons for changing number of grid, delete color 
function createButton(){
    //grid size
    const button = document.createElement("button");
    mainDiv.appendChild(button);
    button.setAttribute("id", "button");
    button.textContent = "Change grid size";

    //add event listener to button for obtaining user input on size
    button.addEventListener(
        "click",
        ()=>{
        userInput = prompt("Please specify desired grid size, between 1-100");
        if(userInput>100){
            alert ("Value too high, please retry")
        } else {
            clearGrid();
        }
        resizeGrid(userInput);
    });
}

//initialize size button
createButton();

//function to reset color
function clearColor(){
    //create button for color reset
    const clearBtn = document.createElement("button");
    mainDiv.appendChild(clearBtn);
    clearBtn.setAttribute("id", "clearBtn");
    clearBtn.textContent = "Clear";

    //add event listener for clear button
    clearBtn.addEventListener(
        "click",
        ()=>{
            mainGrid.childNodes.forEach((child)=>{
                    child.style.backgroundColor = null;
                });
        }
    );
}

//initialize reset color button
clearColor();

//Function to clear grid
//the following removes all the child nodes of the mainGrid node
function clearGrid() {
    while(mainGrid.firstChild){
        mainGrid.removeChild(mainGrid.firstChild);
    }
}


//Function to change grid size
function resizeGrid(userInput) {
    for (i=0;i<userInput*userInput; i++){
        //redeclare childDiv
        //to access the element already created by DOM method
        const childDiv = document.createElement("div");
        mainGrid.appendChild(childDiv);
        childDiv.setAttribute("class","childDiv");

        //calculate size of squares each time grid changes size
        childDiv.style.flexBasis = `calc(100%/${userInput})`;

        //redeclare event listener for changing color when hovering over
        childDiv.addEventListener(
            "mouseenter",
            (event)=> {event.target.style.background = "white";
        }
        );
    }
}